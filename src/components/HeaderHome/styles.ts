import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 24,
  },
  imageContainer: {},
  imageData: {
    height: 54,
    width: 54,
    borderRadius: 50,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: theme.colors.primary,
    marginRight: 7,
  },
  title: {
    fontFamily: theme.fonts.semiBold,
    fontSize: theme.fontSizes.md,
  },
  subtitle: {
    fontFamily: theme.fonts.light,
    fontSize: theme.fontSizes.xs,
  },
  helperContainer: {
    height: 54,
    width: 54,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.gray,
    left: "auto",
    marginLeft: "auto",
  },
});
