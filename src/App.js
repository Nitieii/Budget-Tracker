import * as React from 'react';

import {StackNavigate} from '~/navigate';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

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
