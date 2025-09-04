import { Tabs } from "expo-router";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { theme } from "@/styles/theme";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: {
          alignItems: "center",
          alignSelf: "center",
          top: 10,
        },
        tabBarStyle: {
          backgroundColor: theme.colors.gray,
          position: "absolute",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          bottom: 1,
          borderRadius: 30,
          height: 60,
          width: 261,
          left: "50%",
          paddingHorizontal: 14,
        },
        tabBarActiveBackgroundColor: theme.colors.primary,

        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => (
            <AntDesign name="home" size={24} color={theme.colors.dark} />
          ),
        }}
      />
      <Tabs.Screen
        name="box/index"
        options={{
          title: "Box",
          tabBarIcon: () => (
            <AntDesign name="gift" size={24} color={theme.colors.dark} />
          ),
        }}
      />
      <Tabs.Screen
        name="notification/index"
        options={{
          tabBarIcon: () => (
            <Ionicons
              name="notifications-outline"
              size={24}
              color={theme.colors.dark}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          title: "Configurações",
          tabBarIcon: () => (
            <Ionicons
              name="settings-outline"
              size={24}
              color={theme.colors.dark}
            />
          ),
        }}
      />
    </Tabs>
  );
}
