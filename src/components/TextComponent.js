//Importando os componentes que vou usar
import { Text } from "react-native";

//Exportando os textos
export default function TextComponent({ name, address, description, style }) {
  return (
    <Text style={style}>
      {name}
      {address}
      {description}
    </Text>
  );
}
