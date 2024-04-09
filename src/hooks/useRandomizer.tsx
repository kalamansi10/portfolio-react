const useRandomizer = () => {
  const colorList: string[] = checkScheme();

  function checkScheme() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return [
        "#FF5555",
        "#FFA500",
        "#FFFF66",
        "#66FF66",
        "#6666FF",
        "#8A2BE2",
        "#C71585",
        "#FF5555",
        "#FFA500",
        "#FFFF66",
        "#66FF66",
        "#6666FF",
        "#8A2BE2",
        "#C71585",
      ];
    } else {
      return [
        "#7c2929",
        "#7c5000",
        "#7c7c31",
        "#317c31",
        "#31317c",
        "#43156e",
        "#610941",
        "#7c2929",
        "#7c5000",
        "#7c7c31",
        "#317c31",
        "#31317c",
        "#43156e",
        "#610941"
    ];
    }
  }

  function getRandomTilt() {
    return `rotate(${Math.random() * 10 - 5}deg)`
  }

  return { getColor: () => colorList.pop(), getRandomTilt };
};

export default useRandomizer;
