const nodeList = document.querySelector(".wrapper");
const colorList = [
  "red",
  "blue",
  "yellow",
  "pink",
  "green",
  "yellowGreen",
  "gray",
];
Array.from(nodeList.children).forEach((item, index) => {
  item.style.background = colorList[index];
});
