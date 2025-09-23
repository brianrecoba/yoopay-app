import {
  View,
  Text,
  FlatListProps,
  ImageSourcePropType,
  Image,
} from "react-native";
import { styles } from "./styles";

type Props = {
  price: string;
  name: string;
  icon: ImageSourcePropType;
  day: string;
  month: string;
  emptyMessage?: string;
};

export default function Expense({
  price,
  icon,
  name,
  day,
  month,
  emptyMessage,
  ...rest
}: Props) {
  return (
    <View style={styles.container}>
      <Image source={icon} />
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.date}>
          {day} de {month}
        </Text>
      </View>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
}
