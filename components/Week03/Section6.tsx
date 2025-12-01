import React from "react";
import { Image, Text, View } from "react-native";

export default function Section6() {
  return (
    <View
      style={{
        flexDirection: "column",
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Location
      </Text>
      <Text style={{ fontSize: 14, color: "#666", lineHeight: 20, marginBottom: 15 }}>
        218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et -
      </Text>
      <View>
        <Image
          style={{ width: "100%", height: 200, resizeMode: "cover", borderRadius: 8 }}
          source={require("@/assets/Week03/map.jpg")}
        />
      </View>
    </View>
  );
}
