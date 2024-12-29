import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './SkillScreenStyle';
import ImgResume from '../../components/img-resume/ImgResume';
import Level from '../../components/skills/level';

export default function SkillScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <ImgResume/>
      </View>
        
      <Text style={styles.text}>
        Erickson Dutra
      </Text>

      <View style={{alignSelf: 'center'}}>
        <Level skill='Flutter ' level='🌟🌟🌟🌟' />
        <Level skill='React Native ' level='🌟🌟🌟' />
        <Level skill='Android Nativo ' level='🌟🌟🌟' />
      </View>

    </View>
  );
}