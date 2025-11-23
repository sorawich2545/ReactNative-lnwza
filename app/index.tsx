import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView style={{ flex:1 }}>
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen. Sorawich</Text>
      {/* main menu */}
      <Link href="/page2" style={styles.link}>
        <Text style={styles.linkText}>ไปหน้าหลัก</Text>
      </Link>
      
      {/* flexbox menu */}
      <Link href="/flexbox/EX 01" style={styles.link}>
        <Text style={styles.linkText}>Ex 01</Text>
      </Link>

      <Link href="/flexbox/EX 02" style={styles.link}>
        <Text style={styles.linkText}>Ex 02</Text>
      </Link>

      <Link href="/flexbox/EX 03" style={styles.link}>
        <Text style={styles.linkText}>Ex 03</Text>
      </Link>

      <Link href="/flexbox/EX 04" style={styles.link}>
        <Text style={styles.linkText}>Ex 04</Text>
      </Link>

      <Link href="/flexbox/EX 05" style={styles.link}>
        <Text style={styles.linkText}>Ex 05</Text>
      </Link>

      <Link href="/flexbox/EX 06" style={styles.link}>
        <Text style={styles.linkText}>Ex 06</Text>
      </Link>

      <Link href="/flexbox/EX 07" style={styles.link}>
        <Text style={styles.linkText}>Ex 07</Text>
      </Link>

      <Link href="/flexbox/EX 08" style={styles.link}>
        <Text style={styles.linkText}>Ex 08</Text>
      </Link>

      <Link href="/flexbox/EX 09" style={styles.link}>
        <Text style={styles.linkText}>Ex 09</Text>
      </Link>

      <Link href="/flexbox/EX 10" style={styles.link}>
        <Text style={styles.linkText}>Ex 10</Text>
      </Link>

      <Link href="/flexbox/EX 11" style={styles.link}>
        <Text style={styles.linkText}>Ex 11</Text>
      </Link>

      <Link href="/flexbox/EX 12" style={styles.link}>
        <Text style={styles.linkText}>Ex 12</Text>
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
