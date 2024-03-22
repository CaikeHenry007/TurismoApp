import { StyleSheet } from "react-native";

//Estilização do site
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  quadrado: {
    width: "95%",
    height: "90%",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  Imagem: {
    width: 500,
    height: 500,
    marginTop: "1%",
  },

  name: {
    fontSize: 30,
  },

  address: {
    color: "#add8e6",
    fontSize: 25,
    marginTop: "1%",
  },

  description: {
    fontSize: 20,
    color: "#a9a9a9",
    marginTop: "1%",
    marginLeft: "2%",
    marginRight: "2%",
  },
});

export default styles;
