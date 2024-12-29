import React from 'react';
import { Linking, Text, View } from 'react-native';
import { styles } from './LinksStyle';

export default function Links() {
    const openLink = (url:string) => {
        Linking.openURL(url).catch((err) =>
          console.error("Não foi possível abrir o link:", err)
        );
      };
  return (
    <View style={styles.container}>
        <Text
            style={styles.text}
            onPress={() => openLink('https://github.com/EricksonDutra')}
        >
        Github
        </Text>
        
        <Text
            style={styles.text}
            onPress={() => openLink('https://www.linkedin.com/in/erickson-dutra-dev/')}
        >
        LinkedIn
        </Text>

        <Text
            style={styles.text}
            onPress={() => openLink('https://www.instagram.com/ericksdutra')}
        >
            Instagram
        </Text>
    </View>
  );
}