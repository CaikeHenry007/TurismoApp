//Importando os componentes que vou usar
import { View } from "react-native";
import ImageComponent from "../components/ImageComponent";
import TextComponent from "../components/TextComponent";
import styles from "../styles/StyleSheet";

export default function TouristLocation() {
  //Constante da imagem
  const imagemestadio = {
    uri: "https://i.pinimg.com/originals/a8/31/7f/a8317f6d199347a079ededa55d9f39b6.jpg",
  };
  return (
    //Corpo do site
    <View style={styles.quadrado}>
      <TextComponent
        style={styles.name}
        name="Estádio Cícero Pompeu de Toledo (Morumbis)"
      />
      <ImageComponent imageSource={imagemestadio} />
      <TextComponent style={styles.address} address="São Paulo, Brasil" />
      <TextComponent
        style={styles.description}
        description="O Estádio Cícero Pompeu de Toledo, mais conhecido como Estádio do Morumbi, recebeu o nome do presidente do São Paulo Futebol Clube, falecido em 7 de setembro de 1959. Foi durante sua gestão (1947-1957) que teve início o projeto de construção do estádio. Em 1952, foi adquirido o terreno de 99.873 m² junto à Imobiliária Aricanduva e, em 1953, foi apresentado o projeto do arquiteto Vilanova Artigas e iniciada a construção. Mesmo incompleto, a Comissão Pró-Estádio decidiu fazer uma inauguração, até porque haveria uma importante fonte de receita, a renda dos jogos, para ajudar nas obras. Assim, em 2 de outubro de 1960, diante de 64.748 pessoas, o Estádio do Morumbi recebeu seu primeiro jogo: São Paulo 1X0 Sporting Club de Portugal. O autor do primeiro gol foi Peixinho (Arnaldo Poffo Garcia), aos 12 minutos do primeiro tempo. Somente em 1970 o estádio foi terminado e inaugurado em 25 de janeiro, com o jogo São Paulo 1X1 Futebol Clube do Porto. Passou a ser chamado, também, de “O Maior Estádio Particular do Mundo”, por causa da capacidade oficial para 150 mil pessoas. Mas em 1994 o estádio foi interditado para reformas e a capacidade máxima foi reduzida para 85 mil pessoas. Desde julho de 2012 a capacidade oficial está em 66.795 lugares. Ainda assim, é o maior estádio particular do Brasil."
      />
    </View>
  );
}
