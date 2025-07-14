import { Text, View } from "react-native";
import Home from "./(tabs)/home";
import Dashbord from "./(tabs)/dashbord";
import User from "./(tabs)/user";
import Login from "./autenticacao/login";
import Cadastro from "./autenticacao/cadastro";
import { Redirect } from "expo-router";


export default function index(){    
  return <Redirect href="/autenticacao/login" />;
  //return <Login/>
}