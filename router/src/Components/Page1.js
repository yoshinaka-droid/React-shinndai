import { useParams } from "react-router-dom";
import Star from "./Star";
import List from "./List";
import Home from "./Home";
import './Page1.css';

const Page1 = () => {
    const { id } = useParams();
    var isMatch = true;
    
    return (
        <div key="h1">            
            {List.map  ((rest) => {
                const Total = Math.round((rest.Taste+rest.Amount+rest.Price)*10/3)/10;
                const Map = "https://www.google.co.jp/maps/search/"+rest.Map;

                return(
                {id}.id===(rest.Name)
                ? 
                <div className="modal" key="modal">
                    <Home />
                    <h1>{rest.Name}</h1>        
                    <span>総合評価：{Star(Total)}　{Total}</span>
                    <div>
                    <p>（内訳）</p>
                    <p>　味：{Star(rest.Taste)}　{rest.Taste}</p>
                    <p>　量：{Star(rest.Amount)}　{rest.Amount}</p>
                    <p>値段：{Star(rest.Price)}　{rest.Price}</p>
                    </div>
                    <p>ジャンル：{rest.Genre}</p>
                    <span>信大からの距離：{rest.Dist}　</span>
                    <a href={Map}>地図</a>
                    <div>
                    <span>支払方法</span>
                    </div>
                    <div>
                    <p>店内の雰囲気</p>
                    <span>写真たち</span>
                    <p>写真たち</p>
                    <p>写真たち</p>
                    <p>もっと見る</p>
                    <p>写真たち</p>
                    </div>
                    {isMatch = false}
                </div>
                :
                isMatch
                )
            })}
            {isMatch && <h2>私はその店を知りません。</h2>}
        </div>
    );
};

export default Page1;