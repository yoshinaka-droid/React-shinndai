const Star = (num) => {
  return (
    (num<=1)?"★☆☆☆☆":
    (num<=2)?"★★☆☆☆":
    (num<=3)?"★★★☆☆":
    (num<=4)?"★★★★☆":
    (num<=5)?"★★★★★":""
  );
};

export default Star;