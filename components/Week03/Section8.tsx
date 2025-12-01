import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Section8() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: "white",
        borderTopWidth: 1,
        borderTopColor: "#E0E0E0",
      }}
    >
      <View style={{ flexDirection: "column" }}>
        <Text style={{ fontSize: 12, color: "#666", marginBottom: 4 }}>Price</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#FF0000", marginBottom: 4 }}>
          $399.99
        </Text>
        <Text style={{ fontSize: 12, color: "#666" }}>AVG/Night</Text>
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "#FF6B35",
            paddingHorizontal: 30,
            paddingVertical: 12,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
