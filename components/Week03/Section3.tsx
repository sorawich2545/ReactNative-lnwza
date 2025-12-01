import React from "react";
import { Text, View } from "react-native";

export default function Section3() {
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20, marginTop: 20, marginBottom: 20 }}>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: "#FF6B35",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 15,
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>9.5</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#FF6B35", marginBottom: 5 }}>
            Excellent
          </Text>
          <Text style={{ fontSize: 14, color: "#666" }}>See 801 reviews</Text>
        </View>
      </View>
    </View>
  );
}

