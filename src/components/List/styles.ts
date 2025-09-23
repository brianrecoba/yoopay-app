import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 14,
  },
  title: {
    fontFamily: theme.fonts.medium,
    fontSize: theme.fontSizes.md,
  },
  date: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.xs,
    color: "#787878",
  },
  price: {
    fontFamily: theme.fonts.medium,
    fontSize: theme.fontSizes.md,
    marginLeft: "auto",
  },
});
