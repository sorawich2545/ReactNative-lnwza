import React from "react";
import { Text, View } from "react-native";

export default function Section4() {
  return (
    <View
      style={{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#E0E0E0",
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Hotel Description
      </Text>
      <Text style={{ fontSize: 14, color: "#666", lineHeight: 20 }}>
        218 Austen Mountain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore
      </Text>
    </View>
  );
}
