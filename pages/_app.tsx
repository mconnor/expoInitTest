// import type { AppProps /*, AppContext */ } from 'next/app'
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { default as theme } from '../theme.json'; // <-- Import app theme
import { default as mapping } from '../mapping.json';

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }) => {
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

    return (
        <ApplicationProvider
            {...eva}
            theme={{ ...eva.dark, ...theme }}
            // customMapping={mapping}
        >
            <Component {...pageProps} />
        </ApplicationProvider>
    );
}


export default MyApp