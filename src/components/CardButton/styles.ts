import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 102,
    height: 87,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.gray,
    borderRadius: 8,
    gap: 4,
    marginTop: 24,
    marginRight: 18,
  },
  title: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.sm,
  },
});
