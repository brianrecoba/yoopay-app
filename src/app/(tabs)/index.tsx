import React from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { HeaderHome } from "@/components/HeaderHome";
import { CardButton } from "@/components/CardButton";

import { cards } from "@/data/cards";
import { Card } from "@/components/Card";

export default function HomeIndex() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_300Light,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator
          size="large"
          color={theme?.colors?.primary || "#000"}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <HeaderHome
          name="Pâmela"
          img="https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm90byUyMGRvJTIwcGVyZmlsfGVufDB8fDB8fHww"
        />
        <Card />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {cards.map((card) => (
            <View key={card.id} style={{ marginRight: 18 }}>
              <CardButton
                icon={card.icon}
                title={card.title}
                onPress={() => console.log(`Você clicou em ${card.title}`)}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
  },
});
