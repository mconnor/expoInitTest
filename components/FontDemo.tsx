import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { Text } from 'react-native';

export default function FontDemo() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await Font.loadAsync({
          // You can get this font on Github: https://shorturl.at/chEHS
          'Lato': require('../assets/Lato/Lato-Regular.ttf'),
        });
      } catch ({ message }) {
        // This will be called if something is broken
        console.log(`Error loading font: ${message}`);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  if (!loaded) return <Text>Loading fonts...</Text>;

  return <Text style={{ fontFamily: 'Lato' }}>Hello from Lato</Text>;
}