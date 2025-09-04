import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

import { StyleSheet } from "react-native";
import { Input } from "@/components/Input";
import { theme } from "@/styles/theme";
import { Button } from "@/components/Button";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("@/assets/logo.png")} />
      </View>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Bem-vindo(a) de volta!</Text>
          <Text style={styles.subtitle}>entre com sua senha</Text>
        </View>
        <View style={styles.input}>
          <Input placeholder="Usuário" />
          <Input
            placeholder="Senha"
            secureTextEntry
            icon={
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  console.log("Esconder Senha e trocar o icone");
                }}
              >
                <Feather name="eye" size={24} color={theme.colors.dark} />
              </TouchableOpacity>
            }
          />
          <Text style={styles.forgetText}>Esqueceu a senha?</Text>
        </View>
        <View style={styles.button}>
          <Button variant="default" title="Iniciar Sessão" />
          <Button
            variant="primary"
            icon={
              <FontAwesome5
                name="fingerprint"
                size={24}
                color={theme.colors.primary}
              />
            }
            title="Iniciar com Digital"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 263,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  content: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    fontSize: theme.fontSizes.xl,
    fontFamily: theme.fonts.semiBold,
  },
  subtitle: {
    fontFamily: theme.fonts.light,
    fontSize: theme.fontSizes.lg,
    color: "#6A6A6A",
    textAlign: "center",
  },
  input: {
    width: "100%",
    paddingHorizontal: 24,
    gap: 10,
  },
  forgetText: {
    fontFamily: theme.fonts.medium,
    color: "#868686",
    textAlign: "right",
  },
  button: {
    width: "100%",
    height: 200,
    paddingHorizontal: 24,
    gap: 10,
  },
});
