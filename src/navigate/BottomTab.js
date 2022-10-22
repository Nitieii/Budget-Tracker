import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {StyleSheet, Text, View, Image, Platform} from 'react-native';
import {COLORS, FONTS, screens, SIZES} from '~/constants';

import Feather from 'react-native-vector-icons/Feather';

const GuardTab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <GuardTab.Navigator
      screenOptions={{
        tabBarStyle: styles.footerContainer,
        headerShown: false,
      }}
      initialRouteName="Transaction">
      {screens.navigateBottom.map(screen => (
        <GuardTab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  ...FONTS.body5,
                  fontWeight: '700',
                  color: focused ? COLORS.black : COLORS.lightGray,
                }}>
                {screen.label}
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <View>
                <Feather
                  name={screen.icon}
                  size={25}
                  color={focused ? COLORS.primary : COLORS.lightGray2}
                />
              </View>
            ),
          }}
        />
      ))}
    </GuardTab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  footerContainer: {
    height: Platform.OS === 'ios' ? 100 : 70,

    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.radius,
    paddingTop: SIZES.radius / 4,

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',

    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: '#000000',
    elevation: 4,
  },
});
