// Name:店名、市内に2店舗以上ある場合支店名(地域名)も書く、Phonetic:ふりがな
// Genre:ご飯物、麺類 自由に設定して良い
// Taste:味(なるべく3以上)、Amount:量(多ければ5)、Price:値段(安ければ5、量には関係なく)
// Dist:徒歩、自転車で何分か、Map:GoogleMapの検索ワード
// Pay:使える支払い方法一覧　Parking：駐車場

const List = [
  { Name: "でんでん", Phonetic: "でんでん",
    Genre: "ご飯物",
    Taste: 4, Amount: 5, Price: 4,
    Dist: "徒歩15分", Map: "でんでん" ,
    Pay: "現金、PayPay", Parking: "あり"
  },
  { Name: "満月や", Phonetic: "まんげつや",
    Genre: "ご飯物",
    Taste: 5, Amount: 3, Price: 3,
    Dist: "自転車15分", Map: "満月や",
    Pay: "現金、PayPay", Parking: "あり"
  },
  { Name: "メーヤウ(桐)", Phonetic: "めーやうきり",
    Genre: "ご飯物",
    Taste: 4, Amount: 5, Price: 3,
    Dist: "徒歩15分", Map: "メーヤウ 桐店",
    Pay: "現金", Parking: "あり"
  },
  { Name: "メーヤウ(信大前)", Phonetic: "めーやうしんだいまえ",
    Genre: "ご飯物",
    Taste: 4, Amount: 4, Price: 3,
    Dist: "徒歩5分", Map: "メーヤウ 信大前店",
    Pay: "現金", Parking: "あり"
  },
  { Name: "麺匠佐蔵", Phonetic: "さくら",
    Genre: "麺",
    Taste: 5, Amount: 4, Price: 3,
    Dist: "自転車15分", Map: "麺匠佐蔵",
    Pay: "現金、PayPay", Parking: "なし"
  },
  { Name: "がったぼうず", Phonetic: "がったぼうず",
    Genre: "麺",
    Taste: 5, Amount: 4, Price: 3,
    Dist: "徒歩10分", Map: "がったぼうず",
    Pay: "現金、PayPay", Parking: "なし"
  },
  { Name: "そらや", Phonetic: "そらや",
    Genre: "麺",
    Taste: 5, Amount: 4, Price: 3,
    Dist: "徒歩10分", Map: "札幌らーめん そらや",
    Pay: "現金", Parking: "あり"
  },
  { Name: "がね～しゃ", Phonetic: "がねーしゃ",
    Genre: "ご飯物",
    Taste: 5, Amount: 3, Price: 4,
    Dist: "徒歩20分", Map: "札幌らーめん そらや",
    Pay: "現金", Parking: "なし(徒歩推奨)"
  },
  { Name: "おおぼし(桐)", Phonetic: "おおぼしきり",
    Genre: "麺",
    Taste: 4, Amount: 4, Price: 4,
    Dist: "徒歩20分", Map: "おおぼし 松本桐店",
    Pay: "現金", Parking: "あり"
  }
];
  
export default List;