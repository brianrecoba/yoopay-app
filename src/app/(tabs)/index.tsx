import React from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

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
import { Input } from "@/components/Input";
import { expenses } from "@/data/expenses";
import Expense from "@/components/List";
import { Separator } from "@/components/Separator";

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
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 25 }}
    >
      <View>
        <HeaderHome
          name="Pâmela"
          img="https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm90byUyMGRvJTIwcGVyZmlsfGVufDB8fDB8fHww"
        />
        <Image source={require("../../assets/card-payment.png")} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={cards}
          renderItem={({ item }) => (
            <CardButton
              icon={item.icon}
              title={item.title}
              onPress={() => console.log("clicou")}
            />
          )}
        />
        <Text
          style={{
            fontFamily: theme.fonts.medium,
            fontSize: 20,
            marginTop: 34,
          }}
        >
          Últ. Movimentações
        </Text>
        <Input
          isleft={true}
          style={styles.input}
          icon={<Feather name="search" size={24} color={"#808080"} />}
          placeholder="Procurar..."
        />
      </View>
      <FlatList
        data={expenses}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Separator color={theme.colors.gray} />}
        renderItem={({ item }) => (
          <Expense
            name={item.name}
            icon={item.icon}
            day={item.day}
            month={item.mounth}
            price={item.price}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 11,
    height: 58,
    borderWidth: 1,
    borderColor: "#C9C9C9",
    backgroundColor: "#FFF",
  },
});
