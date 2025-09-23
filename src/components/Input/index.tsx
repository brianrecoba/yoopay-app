import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";

type PropsInput = TextInputProps & {
  icon?: React.ReactNode;
  isleft?: boolean;
};

export function Input({ isleft = false, icon, style, ...rest }: PropsInput) {
  return (
    <View
      style={[
        styles.container,
        style,
        isleft && {
          flexDirection: "row-reverse",
          justifyContent: "flex-end",
        },
      ]}
    >
      <TextInput
        style={[styles.input, isleft && { marginLeft: 15 }]}
        {...rest}
      />
      <View style={styles.iconInput}>{icon}</View>
    </View>
  );
}
