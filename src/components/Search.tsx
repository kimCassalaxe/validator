import { Tema } from "@/src/tema/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

interface props {
  valuer:  string;
  placeholder:string,
  setValuer:any;
};
export default function Index(pro: props) {
  return (
    <View style={styles.modal}>
        <MaterialIcons name="search" size={25} color={Tema.colors.text} />
        <TextInput style={styles.input} value={pro.valuer} placeholder={pro.placeholder}  onChangeText={pro.setValuer}/>
    </View>
  );
}
const styles = StyleSheet.create({
  modal: {
    width:'100%',
    flexDirection:'row',
    justifyContent:"flex-start",
    alignItems:'center',
    backgroundColor:Tema.colors.input,
    padding: 8,
    marginVertical: 10,
    borderRadius:Tema.sizes.radus,
    borderColor:Tema.colors.border,
    borderWidth:Tema.sizes.border,
    borderStyle:"solid",
  },input:{
    width:'90%',
  }
});
