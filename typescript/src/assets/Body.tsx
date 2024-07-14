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
  const hour = currentDate.getHours();
  const min = currentDate.getMinutes();
  const sec = currentDate.getSeconds();
  // 曜日を入手
  const weekday = ["日","月","火","水","木","金","土"];
  const day = weekday[currentDate.getDay()];
// (おわり)現在の曜日と時刻を入手

// (はじめ)あいうえお順にソートする機能
  const [ascOrder,setAscOrder] = useState(true);
  // sortメソッドは破壊的なのでコピーを使う
  const NameList1 = List.slice();
  const NameList2 = List.slice();
  // ↓昇順
  const ascList = NameList1.sort((a, b) => {
    if (a.Phonetic > b.Phonetic) {
      return 1;
    } else {
      return -1;
    }
  });
  // ↓降順
  const descList = NameList2.sort((a, b) => {
    if (a.Phonetic < b.Phonetic) {
      return 1;
    } else {
      return -1;
    }
  });
  const orderedList = ascOrder ? ascList : descList;
// (おわり)あいうえお順にソートする機能

  const orderedList2 = orderedList.filter((rest)=>(rest.HourS<=hour)&&(hour<=rest.HourE));
  
// (はじめ)ボタンがふわっと表示されるシステム
  const navigate = useNavigate();
  // ボタンの枠組み(詳細はchatGPT)
  type ScrollComponentProps = {
    Name: string;
    Total: number;
  };
  const ScrollComponent: React.FC<ScrollComponentProps> = ({Name, Total}) => {
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
        onClick={() => navigate(`/${Name}`)}
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
        {orderedList2.map((rest) => <span>{rest.Name}</span>)}
        <button
          className="time"
        >{day}曜日[{hour}:{min}:{sec}]</button>
        <button
          className="sort"
          onClick={()=>setAscOrder(!ascOrder)}
        >あいうえお順</button>
      </div>
      {/* 各店舗の店名と総合評価をボタンの内部に表示 */}
      {orderedList.map((rest) => {
        // 総合評価(rest.Total)を計算
        const Total =
          Math.round((rest.Taste+rest.Amount+rest.Price)*10/3)/10;

        return (
          <span key={rest.Name + "button"}>
            {/* 店名と総合評価を引き渡す */}
            <ScrollComponent Name={rest.Name} Total={Total}/>
          </span>
        )
      })}
    </div>
  );
};

export default Body;