import { StyleSheet } from "react-native";
import {Tema } from "../tema/Colors";

export const stylesBtn = StyleSheet.create({
btn: {
    width:"100%",
    backgroundColor: Tema.colors.btn,
    padding: Tema.sizes.padd,
    borderRadius: Tema.sizes.radus,
    flexDirection: "row-reverse",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
    marginVertical: 0,
  },
  btnText: {
    color: Tema.colors.btnText,
    fontSize: Tema.sizes.btnText,
    fontWeight: "500",
  }
});
