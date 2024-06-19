import "./Modal.css";
import Star from "./Star";

const Modal = ({ handleBgClick, Name, Genre, Total, Taste, Amount, Price, Map, Dist }) => {

  return (
    <div className="modal" onClick={handleBgClick}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <h1>{Name}</h1>
        <h3>総合評価：{Star(Total)}　{Total}</h3>
        <div>
          <p>（内訳）</p>
          <p>　味：{Star(Taste)}　{Taste}</p>
          <p>　量：{Star(Amount)}　{Amount}</p>
          <p>値段：{Star(Price)}　{Price}</p>
        </div>
        <h4>ジャンル：{Genre}</h4>
        <h4>信大からの距離：{Dist}　地図{Map}</h4>
        <div>
          <h4>店内の雰囲気</h4>
          <span>写真たち</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
