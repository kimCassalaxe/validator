import { StyleSheet, Text, View } from "react-native";
import {Tema} from "../tema/Colors";

type prop = {
    text: string, 
    title:string,
}
export default function Index(props: prop) {
    return(
        <View style={styles.container}>
            <Text style={styles.titleCard}>{props.title}</Text>
            <Text style={styles.btnText}>{props.text}</Text>
        
        </View>
    );
}
const styles = StyleSheet.create({
  container:{
    width:'45%',
    backgroundColor:Tema.colors.s,
    padding: 10,
    borderRadius: Tema.sizes.radus,
    gap: 10,
  },
  btnText: {
    color: Tema.colors.text,
    fontWeight: "bold",
    fontSize:Tema.sizes.h1,
  },
  titleCard: {
    color: Tema.colors.h1,
    fontSize: Tema.sizes.p,
  }
});