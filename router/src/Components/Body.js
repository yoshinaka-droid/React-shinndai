import { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

import List from "./List.js";
import Star from "./Star.js";
import './Body.css';

const Body = () => {
// (はじめ)あいうえお順にソートする機能
  const [changeDesc,setChangeDesc] = useState(true);
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
  const changeList = changeDesc ? ascList : descList;
// (おわり)あいうえお順にソートする機能
  
// (はじめ)ボタンがふわっと表示されるシステム
  const navigate = useNavigate();
  // ボタンの枠組み(詳細はchatGPT)
  const ScrollComponent = ({Name, Total}) => {
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
        <span>星の数は作成者の独断と偏見で決まってます。</span>
        <button
          className="sort"
          onClick={()=>{setChangeDesc(!changeDesc)}}
        >あいうえお順</button>
      </div>
      {/* 各店舗の店名と総合評価をボタンの内部に表示 */}
      {changeList.map((rest) => {
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