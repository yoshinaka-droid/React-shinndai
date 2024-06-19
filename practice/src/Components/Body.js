import { useState } from "react";

import List from "./List.js";
import Modal from "./Modal.js";
import Star from "./Star.js";
import './Body.css';

const Body = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [restaurant, setRestaurant] = useState();

  return (
    <div className="container" key="loop">
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
              onClick={() => {
                <>
                {setModalOpen(true)}
                {setRestaurant(rest)}
                </>
              }}
              disabled={modalOpen}
            >
              <div key={rest.Name + "index"}>
                <h2>{rest.Name}</h2>
                <h3>総合評価：{Star(rest.Total)}</h3>
              </div>
            </button>
          </span>
        )
      })}

      {modalOpen && (
        <Modal 
          handleBgClick={(e) => {
            if (e.target === e.currentTarget) {
              setModalOpen(false);
            }
          }}
          Name={restaurant.Name}
          Genre={restaurant.Genre}
          Total={restaurant.Total}
          Taste={restaurant.Taste}
          Amount={restaurant.Amount}
          Price={restaurant.Price}
          Map={restaurant.Map}
          Dist={restaurant.Dist}
        />
      )}
    </div>
    </div>
  );
};

export default Body;