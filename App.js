import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {StackNavigate} from '~/navigate';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import {COLORS, FONTS, screens, SIZES} from '~/constants';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <StackNavigate />
    </NavigationContainer>
  );
};

export default App;
