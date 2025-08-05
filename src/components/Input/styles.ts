import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#DBDBDB",
    height: 60,
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  input: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.fontSizes.md,
  },
  iconInput: {},
});
