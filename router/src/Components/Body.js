import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import styled from "styled-components";

import List from "./List.js";
import Star from "./Star.js";
import './Body.css';

const Body = () => {
  const navigate = useNavigate();
  // const Box = styled(motion.div)`
  // width: 80px;
  // height: 80px;
  // background: green;
  // border-radius: 20px;
// `;
  // var NameList = List.slice();
  // const asc = NameList.sort((a, b) => {
    // if (a.Phonetic > b.Phonetic) {
      // return 1;
    // } else {
      // return -1;
    // }
  // });
  // const desc = () => {NameList.sort((a, b) => {
    // if (a.Phonetic > b.Phonetic) {
      // return -1;
    // } else {
      // return 1;
    // }
  // })};
  
  return (
    <div className="body">
      <div className="prologue">
      <button
        className="sort"
        // onClick={()=>{NameList=asc}}
      >ソート</button>
      <span>今日の夕食は何にする？(適当な文字列)</span>
      {/* {console.log(asc[0])} */}
      {/* {desc()} */}
      </div>
      {/* <Box animate={{ rotate: -90 }} /> */}
      {List.map((rest) => {
        const total = () => {
          rest.Total=Math.round((rest.Taste+rest.Amount+rest.Price)*10/3)/10
        };

        return (
          <span key={rest.Name + "button"}>
            {total()}
            <button
              className="anime-object button"
              key={rest.Name}
              onClick={() => navigate(`/${rest.Name}`)}
            >
              <div key={rest.Name + "index"}>
                <h2>{rest.Name}</h2>
                <h3>総合評価：{Star(rest.Total)}</h3>
              </div>
            </button>
          </span>
        )
      })}
    </div>
  );
};

export default Body;