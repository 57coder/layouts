const nodeList = document.querySelector(".wrapper");
const colorList = [
  "red",
  "blanchedalmond",
  "yellow",
  "pink",
  "green",
  "yellowGreen",
  "gray",
  "burlywood",
  "goldenrod",
];
Array.from(nodeList.children).forEach((item, index) => {
  item.style.background = colorList[index];
});
