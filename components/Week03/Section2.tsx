import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

export default function Section2() {
  return (
    <View
      style={{
        flex: 1,
        marginTop: -50,
        padding: 20,
        backgroundColor: "white",
        borderRadius: 10,
        marginHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Hilton San Francisco
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 10 }}>
        {[...Array(4)].map((_, index) => (
          <FontAwesome key={index} name="star" size={20} color="#FFD700" />
        ))}
        <FontAwesome name="star-half-o" size={20} color="#FFD700" />
      </View>
      <Text style={{ textAlign: "center", fontSize: 14, color: "#666" }}>
        Facilities provided may range from a modest quality mattress in a small room to large suites
      </Text>
    </View>
  );
}

