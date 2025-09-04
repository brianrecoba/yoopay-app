import { Image, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

type PropsHeaderHome = {
  name: string;
  img: string;
};

export function HeaderHome({ name, img, ...rest }: PropsHeaderHome) {
  return (
    <View style={styles.container} {...rest}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageData}
          source={{
            uri: img,
          }}
        />
      </View>
      <View>
        <Text style={styles.title}>Oi, {name}👋</Text>
        <Text style={styles.subtitle}>Boa tarde !</Text>
      </View>
      <View style={styles.helperContainer}>
        <Ionicons name="help-circle-outline" size={24} color="black" />
      </View>
    </View>
  );
}
