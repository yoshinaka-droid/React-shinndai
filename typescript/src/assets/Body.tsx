import { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

import List from './List.tsx';
import Star from './Star.tsx';
import './Body.css';

const Body = () => {
// (はじめ)現在の曜日と時刻を入手
  // 現在の日時を入手
  const currentDate = new Date();
  // 上から時・分・秒を入手
  const hour: number = currentDate.getHours();
  const min: number = currentDate.getMinutes();
  const sec: number = currentDate.getSeconds();
  const HourMin: number = hour * 100 + min;
  // 曜日を入手
  const weekday:string[] = ["日","月","火","水","木","金","土"];
  const day: string = weekday[currentDate.getDay()];
// (おわり)現在の曜日と時刻を入手

// (はじめ)近い順にソートする機能
  // sortメソッドは破壊的なのでコピーを使う
  const CopyList = List.slice();
  // ↓昇順
  const distList = CopyList.sort((a, b) => {
    if (a.Cycle > b.Cycle) {
      return 1;
    } else {
      return -1;
    }
  });
// (おわり)近い順にソートする機能

// (はじめ)営業時間外の店をフィルタリング
  // 「現在営業中」にチェックがあるかどうか
  const [checkOpen,setcheckOpen] = useState(true);
  // フィルタしたリストを作る
  const filteredList = distList.filter((rest)=>{
    // "??"の左がnullまたはundefinedの場合に右の値を返す
    const Start1: number = rest.Opened[0]
    const End1: number = rest.Opened[1]
    const Start2: number = rest.Opened[2] ?? 5000
    const End2: number = rest.Opened[3] ?? -10
    // const [Start1,End1,Start2,End2] = rest.Opened
    // ↓開店時間１に該当するか
    const open1: boolean = (Start1<=HourMin)&&(HourMin<=End1)
    // ↓開店時間２(が存在するとき)に該当するか　(存在しないときはfalseになる)
    const open2: boolean = (Start2<=HourMin)&&(HourMin<=End2)
    // 現在営業時間かどうか
    const nowOpen: boolean = (open1)||(open2)
    // リストを営業中の店舗に制限するか
    const limitOpen: boolean = (nowOpen)||(!checkOpen)
    return (
      limitOpen
    );
  });
// (おわり)営業時間外の店をフィルタリング
  
// (はじめ)ボタンがふわっと表示されるシステム
  const navigate = useNavigate();
  // ボタンの枠組み(詳細はchatGPT)
  type ScrollComponentProps = {
    Name: string;
    Id: string;
    Total: number;
  };
  const ScrollComponent: React.FC<ScrollComponentProps> = ({Name, Id, Total}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const currentRef = ref.current;

      const observer = new IntersectionObserver(
        ([entry], observer) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // 要素の観察を停止
          }
        },
        { 
          threshold: 0.5, // 50%見えたらトリガー
        }
      );
  
      if (currentRef) {
        observer.observe(currentRef);
      }
  
      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, []);
    
    return (
      <span
      ref={ref}
      className={`scroll-element ${isVisible ? 'in-view' : ''}`}
      >  
        <button
        className="button"
        key={Name}
        onClick={() => navigate(`/${Id}`)}
        >
          <div key={Name + "index"}>
            <h2>{Name}</h2>
            <h3>総合評価：{Star(Total)}</h3>
          </div>
        </button>
      </span>
    );
  };
// (おわり)ボタンがふわっと表示されるシステム

  return (
    <div className="body">
      {/* ボタンの位置を確保するためのもの */}
      <div className="prologue">
        {/* ↓現在の時刻を表示 */}
        <span>{day}曜日[{hour}:{min}:{sec}]</span>
        <button
          className="time"
          onClick={()=>setcheckOpen(!checkOpen)}
        >{checkOpen ? "営業中を表示中" : "全店舗表示中"}</button>
      </div>
      <div>
        現在営業中、ジャンル、駐車場、駐輪場
      </div>
      {/* 各店舗の店名と総合評価をボタンの内部に表示 */}
      {filteredList.map((rest) => {
        // 総合評価(rest.Total)を計算
        const Total =
          Math.round((rest.Score[0]+rest.Score[1]+rest.Score[2])*10/3)/10;

        return (
          <span key={rest.Name + "button"}>
            {/* 店名と総合評価を引き渡す */}
            <ScrollComponent Name={rest.Name} Id={rest.Id} Total={Total}/>
          </span>
        )
      })}
    </div>
  );
};

export default Body;