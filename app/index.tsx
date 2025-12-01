import FlexboxMenu from "@/components/FlexboxMenu";
import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View, TextInput } from "react-native";

export default function Index() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Edit app/index.tsx to edit this screen. Sorawich</Text>
        {/* main menu */}
        <Link href="/page2" style={styles.link}>
          <Text style={styles.linkText}>ไปหน้าหลัก</Text>
        </Link>

        {/* flexbox menu */}
        <Text>Flexbox Menu</Text>
        <FlexboxMenu/>

        <Link href="/travel" style={styles.link}>
          <Text style={styles.linkText}>Travel</Text>
        </Link>

        <Link href="/resort" style={styles.link}>
          <Text style={styles.linkText}>Resort</Text>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  link: {
    margin: 10,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },
  linkText: { color: "#fff", fontSize: 16, textAlign: "center" },
});
