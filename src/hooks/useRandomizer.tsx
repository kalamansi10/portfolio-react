const useRandomizer = () => {
  const colorList: string[] = checkScheme();

  function checkScheme() {
    return [
      "#ee7752",
      "#e73c7e",
      "#23a6d5",
      "#23d5ab",
      "#ee7752",
      "#e73c7e",
      "#23a6d5",
      "#23d5ab",
      "#ee7752",
      "#e73c7e",
      "#23a6d5",
      "#23d5ab",
      "#ee7752",
      "#e73c7e",
      "#23a6d5",
      "#23d5ab",
    ];
  }

  function getRandomTilt() {
    return `rotate(${Math.random() * 10 - 5}deg)`;
  }

  return { getColor: () => colorList.pop(), getRandomTilt };
};

export default useRandomizer;
