import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "@/src/color/Colors";
import BombaNumbre from "./BombaNumbre";
import InputsBoco from "./InputsBico";
import { MaterialIcons } from "@expo/vector-icons";
import InputsValuers from "./InputsValuers";
import { Bomba } from "../types/Types";
import Btn from "./Btn";

interface props {
  multicaixa:  number;
  setMulticaixa: any;
  codigoQR: number;
  setCodigoQR: any;
  frota: number;
  setFrota: any;
  totalSagriasPeriodica: number;
  setTotalSagriasPeriodica: any;
  totalSagrias:number,
  setTotalSagrias: any;
  valordoEsperado?:number;
  valordoApresentado?:number;
  visibleModel?: boolean;
  visibleSave?: boolean;
  onClose?: () => void;
  calc?:any;
  save?:any;
};
export default function Index(pro: props) {
  if (pro.visibleModel === false) return null;

const valid =Number(pro.valordoApresentado)- Number(pro.valordoEsperado);
  return (
    <View style={styles.modal}>
        <Text style={styles.titles}>Valores de Vendas</Text>
        <InputsValuers  text="Vendas pelo MultCaixa" placeholder="Multcaixa" value={pro.multicaixa.toString()} onChangeText={pro.setMulticaixa} keyboardType="numeric" />
        <InputsValuers text="Vendas pelo Codigo QR" placeholder="Codigo QR" value={pro.codigoQR.toString()} onChangeText={pro.setCodigoQR} keyboardType="numeric" />
        <InputsValuers text="Vendas pelo Frota +" placeholder="Frota +" value={pro.frota.toString()} onChangeText={pro.setFrota} keyboardType="numeric" />
        <InputsValuers text="Total das Sagrias periodicas" placeholder="Total das Sagrias periodicas" value={pro.totalSagriasPeriodica.toString()} onChangeText={pro.setTotalSagriasPeriodica} keyboardType="numeric" />
        <Btn icon="autorenew" text="Calcular Sangria Final" onPress={pro.calc}/>
        <InputsValuers text="Total das Sagrias" placeholder={valid.toString()} value={pro.totalSagrias.toString()} onChangeText={pro.setTotalSagrias} keyboardType="numeric" />
      
      <View>
        <Text style={styles.text}>Valor do Esperado: { pro.valordoEsperado?pro.valordoEsperado:0}</Text>
        <Text style={styles.text}>Valor do Apresentado: <Text style={valid>=0? styles.textValido:styles.textNValido}>{ pro.valordoApresentado}</Text></Text>
        
      </View>
      {
        pro.visibleSave?(<Btn styleBtn={styles.btn} icon="save" text="Salvar os dados do Turno" onPress={pro.save}/>):<></>
      }
      
      
    </View>
  );
}
const styles = StyleSheet.create({
  modal: {
    backgroundColor: Colors.card,
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    rowGap:20,
    marginBottom:100,
  },titles:{
    fontSize:Colors.text.title.size,
    fontWeight:"bold",
    marginBottom: 10,
    color: Colors.text.color,
  },btn: {
    width:"100%",
    backgroundColor: Colors.success,
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
    marginVertical: 0,
  },
    text: {
        color: Colors.text.color,
        fontSize: 16, 
        fontWeight:"bold", 
    },textValido: {
        color: Colors.success,
        fontSize: 16,  
    },
    textNValido: {
        color: Colors.erro,
        fontSize: 16,  
    },
});
