import styles from "./src/styles/StyleSheet";
import TouristLocation from "./src/pages/TouristLocation";
import { View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TouristLocation />
    </View>
  );
}
