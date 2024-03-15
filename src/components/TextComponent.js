import { Text } from "react-native";

export default function TextComponent({ name, address, description }) {
  return (
    <Text>
      {name}
      {address}
      {description}
    </Text>
  );
}
