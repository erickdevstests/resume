import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './levelStyle';

interface LevelProps {
    skill: string
    level: string
}

export default function Level({skill, level}:LevelProps) {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <Text  style={styles.text}>{skill}</Text>
            <Text  style={styles.text}>{level}</Text>
        </View>
    </View>
  );
}