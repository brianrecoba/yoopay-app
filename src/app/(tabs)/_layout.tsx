import { Tabs } from "expo-router";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { theme } from "@/styles/theme";
import { View, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const TAB_WIDTH = 261;
export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: {
          top: 10,
          borderRadius: 20,
          marginHorizontal: 5,
        },

        animation: "fade",
        tabBarStyle: {
          backgroundColor: theme.colors.gray,
          position: "absolute",
          bottom: 30,
          borderRadius: 30,
          height: 60,
          width: TAB_WIDTH,
          marginLeft: (width - TAB_WIDTH) / 2,
          paddingHorizontal: 14,
        },
        tabBarActiveBackgroundColor: "transparent",

        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",

          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? theme.colors.primary : "transparent",
                borderRadius: 30,
                width: 44,
                height: 44,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign
                name="home"
                size={24}
                color={focused ? "#fff" : theme.colors.dark}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="box/index"
        options={{
          title: "Box",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? theme.colors.primary : "transparent",
                borderRadius: 30,
                width: 44,
                height: 44,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign
                name="gift"
                size={24}
                color={focused ? "#fff" : theme.colors.dark}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="notification/index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? theme.colors.primary : "transparent",
                borderRadius: 30,
                width: 44,
                height: 44,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="notifications-outline"
                size={24}
                color={focused ? "#fff" : theme.colors.dark}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          title: "Configurações",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? theme.colors.primary : "transparent",
                borderRadius: 30,
                width: 44,
                height: 44,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="settings-outline"
                size={24}
                color={focused ? "#fff" : theme.colors.dark}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
