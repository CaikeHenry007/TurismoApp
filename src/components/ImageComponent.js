//Importando os componentes que vou usar
import { Image } from "react-native";
import styles from "../styles/StyleSheet";

//Exportando a imagem
export default function ImageComponent({ imageSource }) {
  return <Image source={imageSource} style={styles.Imagem} />;
}
