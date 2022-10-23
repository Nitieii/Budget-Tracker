import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {StyleSheet, Text, View, Image, Platform} from 'react-native';
import {COLORS, FONTS, screens, SIZES} from '~/constants';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const GuardTab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <GuardTab.Navigator
      screenOptions={{
        tabBarStyle: styles.footerContainer(SIZES, COLORS),
        headerShown: false,
        keyboardHidesTabBar: true,
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
                  color: focused ? COLORS.black : COLORS.lightGray,
                }}>
                {screen.label}
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <View>
                {screen.name === 'Transaction' ? (
                  <Feather
                    name={screen.icon}
                    size={25}
                    color={focused ? COLORS.primary : COLORS.lightGray}
                  />
                ) : screen.name === 'Stat' ? (
                  <MaterialIcon
                    name={screen.icon}
                    size={25}
                    color={focused ? COLORS.primary : COLORS.lightGray}
                  />
                ) : screen.name === 'Budget' ? (
                  <Ionicons
                    name={screen.icon}
                    size={25}
                    color={focused ? COLORS.primary : COLORS.lightGray}
                  />
                ) : (
                  <FontAwesome
                    name={screen.icon}
                    size={25}
                    color={focused ? COLORS.primary : COLORS.lightGray}
                  />
                )}
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
  footerContainer: (SIZES, COLORS) => ({
    height: Platform.OS === 'ios' ? 100 : 70,

    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.radius,
    paddingTop: SIZES.radius / 4,

    borderTopLeftRadius: SIZES.radius * 2.5,
    borderTopRightRadius: SIZES.radius * 2.5,

    shadowColor: COLORS.lightGray,
    shadowOffset: {width: -2, height: -1},
    shadowOpacity: 0.5,
    shadowRadius: 4,
  }),
});
