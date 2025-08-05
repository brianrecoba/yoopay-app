import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { styles } from "./styles";
import { theme } from "@/styles/theme";

type PropsButton = TouchableOpacityProps & {
  title?: string;
  icon?: React.ReactNode;
  variant: "default" | "primary";
};

export function Button({
  title,
  icon,
  variant = "default",
  ...rest
}: PropsButton) {
  const isDefault = variant === "default";

  const backgroundColor = isDefault ? theme.colors.primary : "#FFF";
  const color = isDefault ? "#FFF" : theme.colors.primary;

  return (
    <TouchableOpacity style={[styles.container, { backgroundColor }]} {...rest}>
      {icon}
      <Text style={[styles.title, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
}
