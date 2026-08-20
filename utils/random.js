import { Dimensions } from "react-native";

export const getRandom = (min, max) => {
  const minHeight = min;
  const maxHeight = max;
  const pipeSize = Math.floor(
    Math.random() * (maxHeight - minHeight + 1) + minHeight,
  );
  return pipeSize;
};

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export const getPipeSizePosPair = (addToPosX = 0) => {
  let yPosTop = -getRandom(300, windowHeight - 100);

  const pipeTop = {
    pos: { x: windowWidth + addToPosX, y: yPosTop },
    size: { width: 75, height: windowHeight * 2 },
  };

  const pipeBottom = {
    pos: { x: windowWidth + addToPosX, y: windowHeight * 2 + 260 + yPosTop },
    size: { height: windowHeight * 2, width: 75 },
  };
  return { pipeTop, pipeBottom };
};
