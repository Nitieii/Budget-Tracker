import React from "react";
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import { Alert, Platform } from "react-native";
import { COLORS } from "~/constants";

const HandleForegroundNoty = () => {
  const createChannel = async (channelId) => {
    PushNotification.createChannel(
      {
        channelId, // (required)
        channelName: `channel ${channelId}`, // (required)
      },
      (created) => console.log(`createChannel: '${channelId}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
  };

  const pushNotification = (notification) => {
    PushNotification.localNotification({
      ...notification,
      vibrate: true,
      vibration: 300,
      playSound: false,
      soundName: "default",
      // actions: '["Yes", "No"]',
      // subText: "This is a subText", // (optional) default: none
      color: COLORS.primary,
    });
  };

  React.useEffect(() => {
    PushNotification.configure({
      // (required) Called when a remote is received or opened, or local notification is opened
      async onNotification(notification) {
        // process the notification
        if (notification.foreground) {
          // check exists
          PushNotification.channelExists(
            notification.channelId,
            async (exists) => {
              if (!exists) await createChannel(notification.channelId);

              pushNotification(notification);
            }
          );
        }
        // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
        if (Platform.OS === "ios") {
          notification.finish(PushNotificationIOS.FetchResult.NoData);
        }
        // (required) Called when a remote is received or opened, or local notification is opened
      },

      // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
      onAction(notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);

        // process the action
      },

      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError(err) {
        console.error(err.message, err);
      },

      senderID: "1090993775405",

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      popInitialNotification: true,
      requestPermissions: true,
    });
  }, []);

  return null;
};

export default HandleForegroundNoty;
