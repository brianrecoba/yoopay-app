import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";

type CardButtonProps = {
  title: string;
  icon: ImageSourcePropType;
  onPress?: () => void;
};

export function CardButton({ title, icon, onPress, ...rest }: CardButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} {...rest}>
      <Image source={icon} height={20} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
