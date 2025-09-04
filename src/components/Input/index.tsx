import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";

type PropsInput = TextInputProps & {
  icon?: React.ReactNode;
};

export function Input({ icon, style, ...rest }: PropsInput) {
  return (
    <View style={[styles.container, style]}>
      <TextInput style={styles.input} {...rest} />
      <View style={styles.iconInput}>{icon}</View>
    </View>
  );
}
