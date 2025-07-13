import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "@/src/color/Colors";
import BombaNumbre from "./BombaNumbre";
import InputsBoco from "./InputsBico";
import { MaterialIcons } from "@expo/vector-icons";
import Btn from "./Btn";

interface props {
  nBomba: number;
  setNBomba:any;
  abertuda1: string;
  fecho1: string;
  setAbertura1: any;
  setFecho1: any;
  abertuda2: string;
  fecho2: string;
  setAbertura2:  any;
  setFecho2: any;
  abertuda3: string;
  fecho3: string;
  setAbertura3:  any;
  setFecho3: any;
  visible?: boolean;
  onClose?: () => void;
  save?:any;
};
export default function Index(pro: props) {
  if (pro.visible === false) return null;
  return (
    <View style={styles.modal}>
      <BombaNumbre value={pro.nBomba.toString()} onChangeText={pro.setNBomba} />

      <InputsBoco
        title="Dados do bico 1 Gasoleo"
        abertuda={pro.abertuda1}
        setAbertura={pro.setAbertura1}
        fecho={pro.fecho1}
        setFecho={pro.setFecho1}
      />
      
      <InputsBoco
        title="Dados do bico 2 Gasolina"
        abertuda={pro.abertuda2}
        setAbertura={pro.setAbertura2}
        fecho={pro.fecho2}
        setFecho={pro.setFecho2}
      />
      
      <InputsBoco
        title="Dados do bico 3 Gasolina"
        abertuda={pro.abertuda3}
        setAbertura={pro.setAbertura3}
        fecho={pro.fecho3}
        setFecho={pro.setFecho3}
      />      
      <Btn icon={"save"} text="Salvar dos dados" onPress={pro.save}></Btn>
    </View>
  );
}
const styles = StyleSheet.create({
  modal: {
    backgroundColor: Colors.card,
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    rowGap:20
  },

});
