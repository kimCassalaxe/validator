import { StyleSheet, TextInput, View } from "react-native";
import { Colors } from "@/src/color/Colors";
import { MaterialIcons } from "@expo/vector-icons";
interface props {
  valuer:  string;
  placeholder:string,
  setValuer:any;
};
export default function Index(pro: props) {
  return (
    <View style={styles.modal}>
        <MaterialIcons name="search" size={25} color={Colors.text.color} />
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
    backgroundColor: Colors.intup,
    padding: 8,
    borderRadius: 10,
    marginVertical: 10,

  },input:{
    width:'90%',
  }
});
