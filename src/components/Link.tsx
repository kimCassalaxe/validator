import { Link } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { Tema } from "../tema/Colors";

type prop = {
    text: string, 
    url:any,
}
export default function Index(props: prop) {
    return(
        <>
            <Link href={props.url}>
            <Text style={styles.textLink}>{props.text}</Text>
            </Link>
        </>
        
    );
}
const styles = StyleSheet.create({
  textLink:{
      color: Tema.colors.link,
    }
});