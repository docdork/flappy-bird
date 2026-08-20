import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GameEngine } from "react-native-game-engine";
import entities from "../entities";
import Physics from "../physics";

export default function Index() {
  const [running, setRunning] = useState(false);
  const [gameEngine, setGameEngine] = useState<any>(null);
  const [currentPoints, setCurrentPoints] = useState(0);

  useEffect(() => {
    setRunning(false);
  }, []);

  return (
    <ImageBackground
      source={require("../images/Mil_ward.png")}
      style={{
        flex: 1,
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity: 0.9,
      }}
    >
      <View
        style={{
          flex: 1,
          overflow: "hidden",
          backgroundColor: "black",
          opacity: 0.8,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 50,
            fontWeight: "bold",
            marginTop: 50,
            color: "#fbf9f9",
          }}
        >
          {currentPoints}
        </Text>
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
                break;
              case "new_point":
                setCurrentPoints((prev) => prev + 1);
                break;
            }
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <StatusBar style="auto" hidden={true} />
        </GameEngine>
        {!running && (
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            }}
          >
            <Image
              source={require("../images/QARANC_badge.png")}
              style={{
                // position: "absolute",
                resizeMode: "contain",
                marginBottom: 20,
                width: Dimensions.get("window").width * 1.5,
                height: Dimensions.get("window").height * 1.5,
              }}
            />
            <Text
              style={{
                backgroundColor: "Black",
                position: "absolute",
                bottom: 200,
                left: 0,
                right: 0,
                fontSize: 20,
                fontWeight: "bold",
                color: "#fbf9f9",
                textAlign: "center",
                marginBottom: 20,
                fontFamily: "Arial",
              }}
            >
              Avoid the obstacles. Tap screen to fly.
            </Text>
            <TouchableOpacity
              onPress={() => {
                setRunning(true);
                gameEngine?.swap(entities());
                setCurrentPoints(0);
              }}
              style={{
                backgroundColor: "#012107",
                borderWidth: 2,
                borderColor: "#05a64b",
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
                borderRadius: 10,
                position: "absolute",
                overflow: "hidden",
                bottom: 100,
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: "#fbf9f9",
                }}
              >
                Press to start
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}
