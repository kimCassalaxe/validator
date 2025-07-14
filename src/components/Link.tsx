import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Colors } from "../color/Colors";
import { Link } from "expo-router";

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
      color:Colors.plasholdr,
    }
});