import messaging from "@react-native-firebase/messaging";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Linking, Platform } from "react-native";
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";

export class NotificationManager {
  configure = (onRegister, onNotification, onOpenNotification) => {
    PushNotification.configure({
      onRegister: function (token) {
        console.log("token", token);
      },
      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification(notification) {
        // process the notification
        if (Platform.OS == "ios") {
          if (notification.data.openedInForeground) {
            notification.userInteraction = true;
          }
        }

        if (notification.userInteraction) {
          onOpenNotification(notification);
        } else {
          onNotification(notification);
        }

        if (Platform.OS == "ios") {
          if (!notification.data.openedInForeground) {
            notification.finish("backgroundFetchNoData");
          }
        } else {
          notification.finish("backgroundFetchNoData");
        }
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
  };

  createChannel = (channelId) => {
    PushNotification.createChannel(
      {
        channelId, // (required)
        channelName: `channel ${channelId}`, // (required)
      },
      (created) => console.log(`createChannel: '${channelId}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
  };

  _buildAndroidNotification = (notification) => {
    return {
      autoCancel: true,
      bigText: notification.message,
      extra: "data",
      vibration: 300,
      vibrate: true,
      priority: "high",
      importance: "high",
    };
  };

  _buildIOSNotification = () => {
    return {
      alertAction: "view",
      category: "",
    };
  };

  showNotification = (notification) => {
    PushNotification.localNotification({
      title: notification.title,
      message: notification.message,
      click_action: notification.data.click_action,

      playSound: true,
      soundName: "default",
      userInteraction: false,
      channelId: "1231jshfjd",
      ...this._buildAndroidNotification(notification),
      ...this._buildIOSNotification(notification),
    });
  };

  cancelAllLocalNotification = () => {
    if (Platform.OS === "ios") {
      PushNotificationIOS.removeAllDeliveredNotifications();
    } else {
      PushNotification.cancelAllLocalNotifications();
    }
  };

  unregister = () => {
    PushNotification.unregister();
  };
}

export const notificationManager = new NotificationManager();

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();

  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    getFcmToken();
  } else {
    console.log("not enabled");
  }
}

// Get FCM TOKEN
const getFcmToken = async () => {
  let fcmToken = await AsyncStorage.getItem("fcmToken");

  console.log("fcmToken", fcmToken);

  if (!fcmToken) {
    try {
      fcmToken = await messaging().getToken();

      if (fcmToken) {
        // user has a device token
        await AsyncStorage.setItem("fcmToken", fcmToken);
      }
    } catch (err) {
      console.log("Unable to get messaging token.", err);
    }
  }
};

// Listen to incoming FCM messages
export const notificationListener = () => {
  messaging().onNotificationOpenedApp((remoteMessage) => {
    if (remoteMessage) {
      Linking.openURL(remoteMessage.data.click_action).catch((err) => {
        console.log("err", err);
      });
    }
  });

  messaging().onMessage((remoteMessage) => {
    if (remoteMessage) {
      notificationManager.showNotification(remoteMessage);
    }
  });

  messaging()
    .getInitialNotification()
    .then((remoteMessage) => {
      if (remoteMessage) {
        console.log("getInitialNotification", remoteMessage);
        if (remoteMessage) {
          console.log(
            "remoteMessage.data.click_action",
            remoteMessage.data.click_action
          );
          Linking.openURL(remoteMessage.data.click_action);
        }
      }
    });
};
