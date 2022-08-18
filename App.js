import { useCallback, useEffect, useState } from 'react';
import { Text, Image, View, useColorScheme } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Asset, useAssets } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import Tabs from './navigation/Tabs';
import Stack from './navigation/Stack';
import Root from './navigation/Root';
import { ThemeProvider } from 'styled-components/native';
import { darkTheme, lightTheme } from './styled';

// promise map을 이용한 방법
// const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));
// const loadImages = (images) =>
//   images.map((image) => {
//     if (typeof image === 'string') {
//       return Image.prefetch(image);
//     } else {
//       return Asset.loadAsync(image);
//     }
//   });

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

export default function App() {
  // 훅을 사용하는 방법
  const [assets] = useAssets([require('./logo.png')]);
  const [loaded] = Font.useFonts(Ionicons.font);

  // const [appIsReady, setAppIsReady] = useState(false);

  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       // 하나씩 하나씩 load하는 방법
  //       // await Font.loadAsync(Ionicons.font);
  //       // await Asset.loadAsync(require('./logo.png'));
  //       // await Image.prefetch(
  //       //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSAIed4wYSrdOySCLR1qucK9MBA7-f7ig8bA&usqp=CAU'
  //       // )
  //       // promise map을 이용한 방법
  //       // const fonts = loadFonts([Ionicons.font]);
  //       // const images = loadImages([
  //       //   require('./logo.png'),
  //       //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSAIed4wYSrdOySCLR1qucK9MBA7-f7ig8bA&usqp=CAU',
  //       // ]);
  //       // await Promise.all([...fonts, ...images]);
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       // Tell the application to render
  //       setAppIsReady(true);
  //     }
  //   }

  //   prepare();
  // }, []);

  const isDark = useColorScheme() === 'dark'; //=> DarkTheme, DefaultTheme을 사용하는 방법

  if (!assets || !loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <NavigationContainer
      // theme={isDark ? DarkTheme : DefaultTheme} => DarkTheme, DefaultTheme을 사용하는 방법
      >
        <Root />
        {/* <Tabs /> */}
        {/* <Stack /> */}
      </NavigationContainer>
    </ThemeProvider>

    // <View onLayout={onLayoutRootView}>
    //   <Text>We are done loading111명준 !</Text>
    // </View>
  );
}
