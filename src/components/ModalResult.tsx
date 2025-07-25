import { Tema } from "@/src/tema/Colors";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import Resumo from "./Resumo";
import { Turno } from "../types/Types";

interface props {
  turno:Turno;
  setVisible: (visible: boolean) => void;
  visible:boolean;
  save?:()=> void;
};
export default function Index(pro: props) {
  if (pro.visible === false) return null;
  return (
      <>
      <Modal
        transparent
        visible={pro.visible}
        animationType="slide"
        onRequestClose={() => pro.setVisible(false)}
      ><View style={styles.modal}>
        <TouchableOpacity onPress={() => pro.setVisible(true)}>
          <MaterialIcons name="close" color={Tema.colors.text} size={24} />
        </TouchableOpacity>
        <Resumo turno={pro.turno} />
    </View>
      </Modal>
      </>
  );
}
const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Tema.colors.b,
    padding: Tema.sizes.padd,
    borderRadius: 10,
    marginVertical: 10,
    rowGap:Tema.sizes.gap
  },

});
