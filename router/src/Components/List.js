// Name:店名、市内に2店舗以上ある場合支店名(地域名)も書く、Phonetic:ふりがな
// Genre:1.ご飯物、2.ラーメン、3.そば、4.パン 数字で設定し、'/Components/Detail.js'で変換する
// Taste:味(なるべく3以上)、Amount:量(多ければ5)、Price:値段(安ければ5、量には関係なく)
// Walk:徒歩何分か、HourS:開店時間、HourE:閉店時間
// Map:GoogleMapの検索ワード
// Pay:使える支払い方法一覧　Parking：駐車場　Cycling：駐輪場

const List = [
  {
    Name: "でんでん",
    Phonetic: "でんでん",
    Genre: 1,
    Taste: 4,
    Amount: 5,
    Price: 4,
    Walk: 15,
    HourS: 11,
    HourE: 22,
    Hour: [11,22],
    Map: "でんでん",
    Pay: "現金、PayPay",
    Parking: true,
    Cycling: true,
  },
  {
    Name: "満月や",
    Phonetic: "まんげつや",
    Genre: 1,
    Taste: 5,
    Amount: 3,
    Price: 3,
    Walk: 15,
    HourS: 11,
    HourE: 19,
    Map: "満月や",
    Pay: "現金、PayPay",
    Parking: true,
    Cycling: true,
  },
  {
    Name: "メーヤウ(桐)",
    Phonetic: "めーやうきり",
    Genre: 1,
    Taste: 4,
    Amount: 5,
    Price: 3,
    Walk: 15,
    HourS: 11,
    HourE: 21,
    Map: "メーヤウ 桐店",
    Pay: "現金",
    Parking: true,
    Cycling: true,
  },
  {
    Name: "メーヤウ(信大前)",
    Phonetic: "めーやうしんだいまえ",
    Genre: 1,
    Taste: 4,
    Amount: 4,
    Price: 3,
    Walk: 5,
    HourS: 11,
    HourE: 21,
    Map: "メーヤウ 信大前店",
    Pay: "現金",
    Parking: false,
    Cycling: false,
  },
  {
    Name: "麺匠佐蔵",
    Phonetic: "さくら",
    Genre: 2,
    Taste: 5,
    Amount: 4,
    Price: 3,
    Walk: 40,
    HourS: 17,
    HourE: 21,
    Map: "麺匠佐蔵",
    Pay: "現金、PayPay",
    Parking: true,
    Cycling: false,
  },
  {
    Name: "がったぼうず",
    Phonetic: "がったぼうず",
    Genre: 2,
    Taste: 5,
    Amount: 4,
    Price: 3,
    Walk: 15,
    HourS: 18,
    HourE: 22,
    Map: "がったぼうず",
    Pay: "現金、PayPay",
    Parking: true,
    Cycling: true,
  },
  {
    Name: "そらや",
    Phonetic: "そらや",
    Genre: 2,
    Taste: 5,
    Amount: 4,
    Price: 3,
    Walk: 10,
    HourS: 11,
    HourE: 21,
    Map: "札幌らーめん そらや",
    Pay: "現金",
    Parking: true,
    Cycling: true,
  },
  {
    Name: "がねいしゃ",
    Phonetic: "がねいしゃ",
    Genre: 1,
    Taste: 5,
    Amount: 3,
    Price: 4,
    Walk: 20,
    HourS: 11,
    HourE: 21,
    Map: "がねいしゃ",
    Pay: "現金",
    Parking: false,
    Cycling: false,
  },
  {
    Name: "龍華楼",
    Phonetic: "りゅうかろう",
    Genre: 2,
    Taste: 3,
    Amount: 5,
    Price: 4,
    Walk: 5,
    HourS: 11,
    HourE: 22,
    Map: "龍華楼",
    Pay: "現金",
    Parking: true,
    Cycling: true,
  },
  {
    Name: "麺51",
    Phonetic: "めんこい",
    Genre: 2,
    Taste: 4,
    Amount: 5,
    Price: 4,
    Walk: 5,
    HourS: 11,
    HourE: 21,
    Map: "麺51",
    Pay: "現金",
    Parking: true,
    Cycling: true,
  },
  {
    Name: "おおぼし(桐)",
    Phonetic: "おおぼしきり",
    Genre: 2,
    Taste: 4,
    Amount: 4,
    Price: 4,
    Walk: 20,
    HourS: 11,
    HourE: 21,
    Map: "おおぼし 松本桐店",
    Pay: "現金",
    Parking: true,
    Cycling: true,
  },
  {
    Name: "エクリュ",
    Phonetic: "えくりゅ",
    Genre: 4,
    Taste: 5,
    Amount: 3,
    Price: 5,
    Walk: 15,
    HourS: 11,
    HourE: 21,
    Map: "パン焼き工房エクリュ",
    Pay: "現金",
    Parking: true,
    Cycling: true,
  },
  {
    Name: "紅葉",
    Phonetic: "こうよう",
    Genre: 2,
    Taste: 4,
    Amount: 5,
    Price: 5,
    Walk: 20,
    HourS: 11,
    HourE: 22,
    Map: "紅葉",
    Pay: "現金",
    Parking: true,
    Cycling: true,
  },
  {
    Name: "潮騒",
    Phonetic: "しおさい",
    Genre: 1,
    Taste: 4,
    Amount: 5,
    Price: 5,
    Walk: 20,
    HourS: 11,
    HourE: 21,
    Map: "潮騒",
    Pay: "現金",
    Parking: true,
    Cycling: true,
  },
  {
    Name: "どん八",
    Phonetic: "どんぱち",
    Genre: 1,
    Taste: 5,
    Amount: 4,
    Price: 4,
    Walk: 30,
    HourS: 11,
    HourE: 20,
    Map: "海鮮丼どん八 松本駅前本店",
    Pay: "現金",
    Parking: true,
    Cycling: true,
  },
  {
    Name: "河昌",
    Phonetic: "かわしょう",
    Genre: 1,
    Taste: 5,
    Amount: 4,
    Price: 4,
    Walk: 30,
    HourS: 17,
    HourE: 20,
    Map: "河昌",
    Pay: "現金",
    Parking: true,
    Cycling: true,
  },
  {
    Name: "楽座",
    Phonetic: "らくざ",
    Genre: 3,
    Taste: 5,
    Amount: 4,
    Price: 4,
    Walk: 30,
    HourS: 11,
    HourE: 19,
    Map: "らくざ",
    Pay: "現金",
    Parking: true,
    Cycling: true,
  },
  {
    Name: "ピカドン",
    Phonetic: "ぴかどん",
    Genre: 1,
    Taste: 5,
    Amount: 4,
    Price: 4,
    Walk: 5,
    HourS: 11,
    HourE: 19,
    Map: "ピカドン",
    Pay: "現金",
    Parking: true,
    Cycling: true,
  },
  {
    Name: "テンホウ",
    Phonetic: "てんほう",
    Genre: 2,
    Taste: 5,
    Amount: 4,
    Price: 4,
    Walk: 5,
    HourS: 11,
    HourE: 21,
    Map: "テンホウ",
    Pay: "現金、クレカ、PayPay、auPay等",
    Parking: true,
    Cycling: true,
  },
  {
    Name: "まんま",
    Phonetic: "まんま",
    Genre: 1,
    Taste: 5,
    Amount: 4,
    Price: 4,
    Walk: 15,
    HourS: 11,
    HourE: 21,
    Map: "まんま 女鳥羽",
    Pay: "現金",
    Parking: true,
    Cycling: true,
  },
  {
    Name: "まんぷく亭",
    Phonetic: "まんぷくてい",
    Genre: 1,
    Taste: 4,
    Amount: 4,
    Price: 4,
    Walk: 20,
    HourS: 1130,
    HourE: 1430,
    Map: "まんぷく亭",
    Pay: "現金",
    Parking: true,
    Cycling: true,
  },
  {
    Name: "ビストロ鬼平",
    Phonetic: "びすとろおにへい",
    Genre: 1,
    Taste: 5,
    Amount: 4,
    Price: 4,
    Walk: 20,
    HourS: 11,
    HourE: 19,
    Map: "ビストロ鬼平",
    Pay: "現金",
    Parking: true,
    Cycling: true,
  },
  {
    Name: "鎌倉パスタ",
    Phonetic: "びすとろおにへい",
    Genre: 1,
    Taste: 5,
    Amount: 4,
    Price: 4,
    Walk: 20,
    HourS: 11,
    HourE: 20,
    Map: "鎌倉パスタ　イオンモール松本店",
    Pay: "現金",
    Parking: true,
    Cycling: true,
  },
];

export default List;
