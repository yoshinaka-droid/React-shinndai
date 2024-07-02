import { useParams } from "react-router-dom";
import Star from "./Star";
import List from "./List";
import Home from "./Home";
import './Detail.css';

const Detail = () => {
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
                <div className="detail" key={rest.Name+"detail"}>
                    <Home />
                    <h1>{rest.Name}</h1>        
                    <table id="table">
                    <tbody>
                    <tr>
                        <th>総合評価</th>
                        <td>{Star(Total)}　{Total}</td>
                    </tr>
                    <tr>
                        <th rowSpan="3">（内訳）</th>
                        <td>味　　{Star(rest.Taste)}　{rest.Taste}</td>
                    </tr>
                    <tr>
                        <td>量　　{Star(rest.Amount)}　{rest.Amount}</td>
                    </tr>
                    <tr>
                        <td>値段　{Star(rest.Price)}　{rest.Price}</td>
                    </tr>
                    <tr>
                        <th>ジャンル</th>
                        <td>{rest.Genre}</td>
                    </tr>
                    <tr>
                        <th>信大からの距離</th>
                        <td>{rest.Dist}　<a href={Map}>地図</a></td>
                    </tr>
                    <tr>
                        <th>支払方法</th>
                        <td>{rest.Pay}</td>
                    </tr>
                    </tbody>
                    </table>
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

export default Detail;