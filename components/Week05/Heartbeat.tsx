import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Heartbeat() {
  const [isPressed, setIsPressed] = useState(false);
  const [heartbeatCount, setHeartbeatCount] = useState(1);

  const handlePress = () => {
    setIsPressed(true);
    setHeartbeatCount(heartbeatCount * 2);
    // Reset pressed state after animation
    setTimeout(() => setIsPressed(true), 200);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        style={[styles.button, isPressed && styles.buttonPressed]}
      >
        <FontAwesome
          name="heartbeat"
          size={40}
          color={isPressed ? "#EF4444" : "#DC2626"}
        />
        <Text style={styles.text}>Heartbeat: {heartbeatCount}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonPressed: {
    transform: [{ scale: 0.95 }],
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});
