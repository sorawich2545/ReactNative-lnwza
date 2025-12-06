import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Bmi() {
  // สร้าง State สำหรับ Input
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  
  // สร้าง State สำหรับ Output
  const [bmi, setBmi] = useState("");
  const [text, setText] = useState("");
  const [bmiColor, setBmiColor] = useState("#FFFFFF"); // สีพื้นหลังของกล่องแสดงผล

  // ฟังก์ชันคำนวณ BMI
  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // แปลง cm เป็น m
    
    if (w > 0 && h > 0) {
      const bmiValue = (w / (h * h)).toFixed(2);
      const bmiNum = parseFloat(bmiValue);
      setBmi(bmiValue);
      
      // กำหนดข้อความและสีตามค่า BMI
      if (bmiNum < 18.5) {
        setText("Underweight");
        setBmiColor("#1E3A8A"); // dark blue
      } else if (bmiNum < 25) {
        setText("Normal");
        setBmiColor("#06B6D4"); // light blue/teal
      } else if (bmiNum < 30) {
        setText("Overweight");
        setBmiColor("#FB923C"); // light orange
      } else if (bmiNum < 35) {
        setText("Obese");
        setBmiColor("#F97316"); // orange
      } else {
        setText("Extremely Obese");
        setBmiColor("#EF4444"); // red
      }
    } else {
      // ถ้าไม่ได้กรอกค่าหรือกรอกไม่ถูกต้อง ให้แสดงข้อความแจ้งเตือน
      alert("กรุณากรอกน้ำหนักและส่วนสูงให้ถูกต้อง");
    }
  };

  return (
    <View>
      {/* แถวที่ 1 */}
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
          height: 100,
          justifyContent: "space-around",
          marginTop: 20,
          marginHorizontal: 20,
        }}
      >
        <Text>Weight (kg.)</Text>
        <TextInput 
          placeholder="Input your Weight..." 
          placeholderTextColor="gray" 
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />
      </View>
      
      {/* แถวที่ 2 */}
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
          height: 100,
          justifyContent: "space-around",
          marginTop: 20,
          marginHorizontal: 20,
        }}
      >
        <Text>Height (cm.)</Text>
        <TextInput 
          placeholder="Input your Height..." 
          placeholderTextColor="gray" 
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />
      </View>
      
      {/* แถวที่ 3 */}
      <View style={{ flexDirection: "row", marginVertical: 20, justifyContent : "center" }}>
        <View
          style={{
            backgroundColor: "white",
            padding: 50,
            borderRadius: 15,
            height: 140,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            marginHorizontal: 20,
            marginRight: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {bmi || "0.00"}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: bmiColor, // ใช้สีตามค่า BMI
            padding: 50,
            borderRadius: 15,
            height: 140,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            marginHorizontal: 20,
            marginLeft: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
            {text || "-"}
          </Text>
        </View>
      </View>
      
      {/* แถวที่ 4 */}
      <Button title="CALCULATE" onPress={calculateBMI} />
    </View>
  );
}
