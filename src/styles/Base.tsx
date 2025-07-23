import { StyleSheet } from "react-native";
import { Tema } from "../tema/Colors";

export const base = StyleSheet.create({
    container: {
    backgroundColor: Tema.colors.b,
    paddingTop: 10,
    padding: 5,
    paddingBottom: 100,
  },
});

export const baseAutentication = StyleSheet.create({
container: {
    backgroundColor:Tema.colors.b,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding: 15,
    paddingBottom: 100,
  },loginBox:{
    marginBottom:30,
    width:"100%",
    gap:30,
    borderRadius:5,

  },styleBox:{
borderRadius:Tema.sizes.radus,
    borderColor:Tema.colors.border,
    borderWidth:Tema.sizes.border,
    borderStyle:"solid",
    width:"100%",
    padding:10,
    fontSize:18,

  },
  text: {
    textAlign:"center",
    color: Tema.colors.btnText,
    fontSize: 16,  
    },
    linkBox:{
      marginTop:10,
      flexDirection:"row",
      width:"100%",
      justifyContent:"space-between",
      color:Tema.colors.text,
    },
});
