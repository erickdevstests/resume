import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './HomeStyle';
import ImgResume from '../../components/img-resume/ImgResume';
import Links from '../../components/links/Links';


export default function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.img}>
          <ImgResume/>
        </View>
        
        <Text style={{fontFamily: 'Georgia', fontSize: 24, fontWeight: 'bold'}}>
          Erickson Dutra
        </Text>
    
        <View>
          <Links/>
        </View>
    </View>
  );
}

