import Matter from "matter-js";
import { Dimensions } from "react-native";
import { getPipeSizePosPair } from "./utils/random";

const Physics = (entities, { touches, time, dispatch }) => {
  let engine = entities.physics.engine;
  let world = entities.physics.world;

  world.gravity.y = 1.2;

  touches
    .filter((t) => t.type === "press")
    .forEach((t) => {
      let bird = entities.Bird.body;
      Matter.Body.setVelocity(bird, { x: 0, y: -10 });
    });
  Matter.Engine.update(engine, time.delta);

  for (let index = 1; index <= 2; index++) {
    if (
      entities[`ObstacleTop${index}`].body.bounds.max.x <= 50 &&
      !entities[`ObstacleTop${index}`].point
    ) {
      entities[`ObstacleTop${index}`].point = true;
      dispatch({ type: "new_point" });
    }

    if (entities[`ObstacleTop${index}`].body.bounds.max.x <= 0) {
      const pipeSizePosPair = getPipeSizePosPair(
        Dimensions.get("window").width * 0.9,
      );
      entities[`ObstacleTop${index}`].point = false;
      Matter.Body.setPosition(
        entities[`ObstacleTop${index}`].body,
        pipeSizePosPair.pipeTop.pos,
      );
      Matter.Body.setPosition(
        entities[`ObstacleBottom${index}`].body,
        pipeSizePosPair.pipeBottom.pos,
      );
    }

    Matter.Body.translate(entities[`ObstacleTop${index}`].body, {
      x: -2.5,
      y: 0,
    });
    Matter.Body.translate(entities[`ObstacleBottom${index}`].body, {
      x: -2.5,
      y: 0,
    });
  }

  Matter.Events.on(engine, "collisionStart", (event) => {
    dispatch({ type: "game_over" });
  });
  return entities;
};

export default Physics;
