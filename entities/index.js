import Matter from "matter-js";
import Bird from "../components/Bird";
import Floor from "../components/Floor";
import Obstacle from "../components/Obstacle";
import { getPipeSizePosPair } from "../utils/random";
import { Dimensions } from "react-native";


const { width, height } = Dimensions.get("window");

const pipeSizeA = getPipeSizePosPair();
const pipeSizeB = getPipeSizePosPair(width * 0.9);

export default (restart) => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  world.gravity.y = 0.5;
  console.log("height: ", height, "width: ", width);
  return {
    physics: { engine, world },

    Bird: Bird(world, "green", { x: 100, y: 200 }, { width: 40, height: 40 }),

    ObstacleTop1: Obstacle(
      world,
      "ObstacleTop1",
      "red",
      pipeSizeA.pipeTop.pos,
      pipeSizeA.pipeTop.size,
    ),

    ObstacleBottom1: Obstacle(
      world,
      "ObstacleBottom1",
        "blue",
        pipeSizeA.pipeBottom.pos,
        pipeSizeA.pipeBottom.size,
    ),
    ObstacleTop2: Obstacle(
      world,
      "ObstacleTop2",
      "red",
      pipeSizeB.pipeTop.pos,
      pipeSizeB.pipeTop.size,
    ),

    ObstacleBottom2: Obstacle(
      world,
      "ObstacleBottom2",
        "blue",
        pipeSizeB.pipeBottom.pos,
        pipeSizeB.pipeBottom.size,
    ),

    Floor: Floor(
      world,
      "green",
      { x: width / 2, y: height -25 },
      { width: width, height: 50 },
    ),
  };
};
