import React from "react";
import { Image, Text, View } from "react-native";

export default function Section7() {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}
    >
      <View style={{ marginBottom: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Room Type</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ marginRight: 15 }}>
          <Image
            style={{ width: 120, height: 120, borderRadius: 8, resizeMode: "cover" }}
            source={require("@/assets/Week03/room-6.jpg")}
          />
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 8 }}>
            Standard Twin Room
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#FF0000", marginBottom: 8 }}>
            $399.99
          </Text>
          <Text style={{ fontSize: 14, color: "#0066FF" }}>
            Hurry Up! This is your last room!
          </Text>
        </View>
      </View>
    </View>
  );
}
