import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: theme.colors.primary,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderColor: theme.colors.primary,
    borderWidth: 1,
  },
  title: {
    fontFamily: theme.fonts.medium,
    marginLeft: 8,
    fontSize: theme.fontSizes.md,
  },
});
