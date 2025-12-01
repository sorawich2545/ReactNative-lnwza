import React from "react";
import { Image, View } from "react-native";

export default function Section1() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ flex: 1, resizeMode: "cover", aspectRatio: 16 / 9 }}
          source={require("@/assets/Week03/room-1.jpg")}
        />
      </View>
    </View>
  );
}

