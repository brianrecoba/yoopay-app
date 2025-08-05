import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
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
