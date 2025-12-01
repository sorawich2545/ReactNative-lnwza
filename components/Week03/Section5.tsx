import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

export default function Section5() {
  const amenities = [
    { icon: "wifi", label: "wifi", iconType: "FontAwesome" },
    { icon: "coffee", label: "coffee", iconType: "FontAwesome" },
    { icon: "bathtub", label: "bath", iconType: "MaterialIcons" },
    { icon: "car", label: "car", iconType: "FontAwesome" },
    { icon: "paw", label: "paw", iconType: "FontAwesome" },
  ];

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}
    >
      {amenities.map((amenity, index) => (
        <View key={index} style={{ alignItems: "center" }}>
          {amenity.iconType === "FontAwesome" ? (
            <FontAwesome name={amenity.icon as any} size={30} color="#4A90E2" />
          ) : (
            <MaterialIcons name={amenity.icon as any} size={30} color="#4A90E2" />
          )}
          <Text style={{ fontSize: 12, color: "#666", marginTop: 5 }}>
            {amenity.label}
          </Text>
        </View>
      ))}
    </View>
  );
}
