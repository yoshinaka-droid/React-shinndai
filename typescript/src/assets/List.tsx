// Name:店名、市内に2店舗以上ある場合支店名(地域名)も書く、Phonetic:ふりがな
// Genre:1.ご飯物、2.ラーメン、3.そば、4.パスタ、5.パン 数字で設定し、'/Components/Detail.js'で変換する
// Taste:味(なるべく3以上)、Amount:量(多ければ5)、Price:値段(安ければ5、量には関係なく)
// Walk:徒歩何分か、Opened:開店時間(ラストオーダーを閉店時間とする)
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
    Walk: 19,
    Opened: [1130,1430,1730,2200],
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
    Walk: 20,
    Opened: [1130,1500,1700,2200],
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
    Walk: 10,
    Opened: [1130,2100],
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
    Walk: 2,
    Opened: [1130,2100],
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
    Walk: 38,
    Opened: [1130,1500,1730,2200],
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
    Walk: 21,
    Opened: [1100,1500,1730,2300],
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
    Walk: 15,
    Opened: [1100,1430,1700,2100],
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
    Walk: 23,
    Opened: [1130,1400,1800,2200],
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
    Walk: 7,
    Opened: [1100,1430,1700,2300],
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
    Walk: 8,
    Opened: [1130,1430,1730,2130],
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
    Walk: 10,
    Opened: [1100,1500,1730,2100],
    Map: "おおぼし 松本桐店",
    Pay: "現金",
    Parking: true,
    Cycling: true,
  },
  {
    Name: "Ecru(えくりゅ)",
    Phonetic: "えくりゅ",
    Genre: 5,
    Taste: 5,
    Amount: 3,
    Price: 5,
    Walk: 13,
    Opened: [730,1800],
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
    Walk: 25,
    Opened: [1100,1430,1700,2300],
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
    Walk: 45,
    Opened: [1130,1400,1800,2130],
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
    Walk: 46,
    Opened: [1115,1500,1700,2000],
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
    Walk: 21,
    Opened: [1130,1330,1700,2100],
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
    Walk: 23,
    Opened: [1100,1900],
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
    Walk: 2,
    Opened: [1130,1400,1730,2100],
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
    Walk: 6,
    Opened: [1100,2130],
    Map: "テンホウ松本追分店",
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
    Walk: 20,
    Opened: [1100,1400],
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
    Walk: 26,
    Opened: [1130,1430],
    Map: "まんぷく亭",
    Pay: "現金",
    Parking: true,
    Cycling: true,
  },
  {
    Name: "ビストロ鬼平",
    Phonetic: "びすとろおにへい",
    Genre: 4,
    Taste: 5,
    Amount: 4,
    Price: 4,
    Walk: 23,
    Opened: [1200,1400,1800,2045],
    Map: "ビストロ鬼平",
    Pay: "現金",
    Parking: true,
    Cycling: true,
  },
  {
    Name: "鎌倉パスタ",
    Phonetic: "かまくらぱすた",
    Genre: 4,
    Taste: 5,
    Amount: 4,
    Price: 4,
    Walk: 37,
    Opened: [1100,2100],
    Map: "鎌倉パスタ　イオンモール松本店",
    Pay: "現金",
    Parking: true,
    Cycling: true,
  },
  {
    Name: "かつ富",
    Phonetic: "かつとみ",
    Genre: 1,
    Taste: 5,
    Amount: 4,
    Price: 4,
    Walk: 22,
    Opened: [1130,1400,1730,2100],
    Map: "DOLCEかつ富",
    Pay: "現金、PayPay",
    Parking: true,
    Cycling: true,
  },
];

export default List;
  