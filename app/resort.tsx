import Section1 from '@/components/Week03/Section1';
import Section2 from '@/components/Week03/Section2';
import Section3 from '@/components/Week03/Section3';
import Section4 from '@/components/Week03/Section4';
import Section5 from '@/components/Week03/Section5';
import Section6 from '@/components/Week03/Section6';
import Section7 from '@/components/Week03/Section7';
import Section8 from '@/components/Week03/Section8';

import React from 'react';
import { ScrollView, View } from 'react-native';

export default function Resort() {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <Section1/>
                <Section2/>
                <Section3/>
                <Section4/>
                <Section5/>
                <Section6/>
                <Section7/>
                <Section8/> 
            </ScrollView>
        </View>
    );
}
