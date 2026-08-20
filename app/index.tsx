import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { GameEngine } from "react-native-game-engine";
import entities from "../entities";
import Physics from "../physics";

export default function Index() {
  const [running, setRunning] = useState(false);
  const [gameEngine, setGameEngine] = useState<any>(null);
  const [currentPoints, setCurrentPoints] = useState(0);
  useEffect(() => {
    setRunning(true);
  }, []);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <GameEngine
        ref={(ref) => {
          setGameEngine(ref);
        }}
        systems={[Physics]}
        entities={entities()}
        running={running}
        onEvent={(e: { type: string }) => {
          switch (e.type) {
            case "game_over":
              setRunning(false);
              gameEngine?.stop();
              setCurrentPoints(0);
          }
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      ></GameEngine>

      <StatusBar style="auto" hidden={true} />
    </View>
  );
}
