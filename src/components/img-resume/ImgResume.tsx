import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './ImgResumeStyle';

import Foto from '../../../assets/eu.jpeg'

export default function ImgResume() {
  return (
        <Image 
            resizeMode='cover'
            source={Foto}
            style={styles.container}
        />
            
  );
}