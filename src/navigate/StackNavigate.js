import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens } from "~/constants";
import BottomTab from "./BottomTab";

const Stack = createNativeStackNavigator();

const StackNavigate = () => {
  return (
    <Stack.Navigator
      initialRouteName={"BottomTab"}
      screenOptions={{
        headerShown: false,
        headerBackTitleVisible: false,
        contentStyle: {
          backgroundColor: "#FFFFFF",
        },
      }}
    >
      <Stack.Screen name="BottomTab" component={BottomTab} />
      {screens.navigateAuth.map((screen) => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            headerShown: screen.headerShow || false,
            title: screen?.title || "",
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigate;
