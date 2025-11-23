import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Page2() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>กูว่าเเล้วมึงต้องอ่าน!</Text>
      <Text style={styles.subtitle}>รักบี๋ค้าบบบ</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
  },
});
