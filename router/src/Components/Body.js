import { useNavigate } from "react-router-dom";

import List from "./List.js";
import Star from "./Star.js";
import './Body.css';

const Body = () => {
  const navigate = useNavigate();
  
  return (
    <div className="body">
      {List.map((rest) => {
        const total = () => {
          rest.Total=Math.round((rest.Taste+rest.Amount+rest.Price)*10/3)/10
        };

        return (
          <span key={rest.Name + "button"}>
            {total()}
            <button
              className="button"
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