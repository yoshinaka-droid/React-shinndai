import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import styled from "styled-components";

import List from "./List.js";
import Star from "./Star.js";
import "./Body.css";

const Body = () => {
  const navigate = useNavigate();

  const ScrollComponent = ({ Name, Total }) => {
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
        className={`scroll-element ${isVisible ? "in-view" : ""}`}
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

  return (
    <div className="body">
      <div className="prologue">
        <button
          className="sort"
          // onClick={()=>{NameList=asc}}
        >
          ソート
        </button>
        <span>星の数は必ずしも正しい評価とは限りません</span>
        {/* {console.log(asc[0])} */}
        {/* {desc()} */}
      </div>
      {List.map((rest) => {
        const total = () => {
          rest.Total =
            Math.round(((rest.Taste + rest.Amount + rest.Price) * 10) / 3) / 10;
        };

        return (
          <span key={rest.Name + "button"}>
            {total()}
            <ScrollComponent Name={rest.Name} Total={rest.Total} />
          </span>
        );
      })}
    </div>
  );
};

export default Body;
