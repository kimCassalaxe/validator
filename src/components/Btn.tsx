import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import { stylesBtn } from "../styles/Btn";
import { Tema} from "../tema/Colors";

type prop = {
    text: string, 
    onPress: any,
    icon?:any,
    styleText?: any
    styleBtn?:any,
}
export default function Index(props: prop) {
    return(
        <>
        <TouchableOpacity style={[stylesBtn.btn,props.styleBtn]} onPress={props.onPress}>
            <Text style={[stylesBtn.btnText,props.styleText]}>{props.text}</Text>
            <MaterialIcons name={props.icon} size={24} color={Tema.colors.btnText} />
        </TouchableOpacity>
        </>
    );
}
