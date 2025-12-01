import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import Signup from '@/components/Week03/Signup';

export default function Travel() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop : 50  }}>
                {/* <Text>Text of Week 3 </Text> */}
                <Signup />
            </View>
        </ScrollView>
    );
}
