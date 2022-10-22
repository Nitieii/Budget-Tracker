import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {StyleSheet, Text, View, Image, Platform} from 'react-native';
import {COLORS, FONTS, screens, SIZES} from '../constants';

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
                  color: focused ? COLORS.white : COLORS.lightGray,
                }}>
                {screen.label}
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <View
              // style={{
              //   marginBottom: 5,
              // }}
              >
                {/* <View>
                  {screen.icon !== 'player-settings' ? (
                    <>
                      <MaterialCommunityIcons
                        name={screen.icon}
                        size={25}
                        color={focused ? COLORS.white : COLORS.lightGray}
                      />
                    </>
                  ) : (
                    <FontistoIcon
                      name={screen.icon}
                      size={25}
                      color={focused ? COLORS.white : COLORS.lightGray}
                    />
                  )}
                </View> */}
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
    // height: Platform.OS === "ios" ? 80 : 60,
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.radius,
    paddingTop: SIZES.radius / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
