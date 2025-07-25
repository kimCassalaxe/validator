import { StyleSheet } from "react-native";
import {Tema } from "../tema/Colors";

export const stylesBico = StyleSheet.create({
    subTitle:{
    color:Tema.colors.h1,
    marginBottom:5,
  },
  inputBox:{
    flexDirection: "row",
    width: "100%",
    gap: 10,
    justifyContent: "space-between",  
    alignItems: "center",
    elevation: 4.1,
  },
  elements: {
    padding:10,
    width: "45%",
    borderRadius:Tema.sizes.radus,
    borderColor:Tema.colors.border,
    borderWidth:Tema.sizes.border,
    borderStyle:"solid",

    color:Tema.colors.text,
    backgroundColor:Tema.colors.input,
  },
});

export const stylesValue = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    
   
  },
  text: {
        color: Tema.colors.text,
        fontSize: 16,  
    },
  elements: {
    width: "30%",
    margin: 0,
    padding:10,
    borderRadius:Tema.sizes.radus,
    borderColor:Tema.colors.border,
    borderWidth:Tema.sizes.border,
    borderStyle:"solid",
    color:Tema.colors.text,
    backgroundColor:Tema.colors.input,
  }
  ,
});
