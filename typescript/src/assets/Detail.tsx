import { useParams } from 'react-router-dom';
import Star from './Star';
import List from './List';
import Home from './Home';
import './Detail.css';

const Detail = () => {
  // ↓{ id }の中の"id"プロパティを使う(これは現在のドメインを入手するもの)
  const { id } = useParams();
  // ↓404Pageを表示するかどうかのフラグメント(と店の重複を避けるため)
  var isMatch = true;

  // const GenreList = ["","ご飯物","ラーメン","そば","パスタ","パン"]

  return (
    <div key="h1">
      {List.map((rest) => {
        // 総合評価の計算
        const Total =
        Math.round((rest.Score[0]+rest.Score[1]+rest.Score[2])*10/3)/10;
        // Googleマップへのリンク
        const Map = "https://www.google.co.jp/maps/search/" + rest.Map;        

        // isMatchはリストで重複があったときに同じ情報が表示されないようにするもの
        return { id }.id === rest.Id && isMatch && (
          <div className="detail" key={rest.Name + "detail"}>
            {/* 「戻る」ボタン */}
            <Home />
            <h1>{rest.Name}</h1>
            <table id="table">
              <tbody>
                <tr>
                  <th>総合評価</th>
                  <td>
                    {Star(Total)}　{Total}
                  </td>
                </tr>
                <tr>
                  <th rowSpan={3}>（内訳）</th>
                  <td>
                    味　　{Star(rest.Score[0])}　{rest.Score[0]}
                  </td>
                </tr>
                <tr>
                  <td>
                    量　　{Star(rest.Score[1])}　{rest.Score[1]}
                  </td>
                </tr>
                <tr>
                  <td>
                    値段　{Star(rest.Score[2])}　{rest.Score[2]}
                  </td>
                </tr>
                <tr>
                  <th>ジャンル</th>
                  <td>{rest.Genre}</td>
                </tr>
                <tr>
                  <th>信大からの距離</th>
                  <td>
                    徒歩{rest.Cycle * 3}分　自転車{rest.Cycle}分　<a href={Map}>地図</a>
                  </td>
                </tr>
                <tr>
                  <th>支払方法</th>
                  <td>
                    PayPay:{rest.Pay[0]?"可":"不可"}　
                    カード:{rest.Pay[1]?"可":"不可"}　
                    電子マネー:{rest.Pay[2]?"可":"不可"}
                  </td>
                </tr>
                <tr>
                  <th>駐車場・駐輪場</th>
                  <td>
                    {rest.Parking[0]?"あり":"なし"}・
                    {rest.Parking[1]?"あり":"なし"}
                  </td>
                </tr>
              </tbody>
            </table>
            {(isMatch = false)}
          </div>
        );
      })}
      {isMatch && <h2>404Page私はその店を知りません。</h2>}
    </div>
  );
};

export default Detail;
