import { Redirect} from "expo-router";
import React ,{ useEffect, useState } from "react";
import {initDb, limparTabela } from "@/src/db/dbInit";
import { User } from "@/src/types/Types";
import { getAllUsers } from "@/src/db/useDbUser";
import { UserProvider } from "@/src/contexts/userContext";



export default function index(){
  const [users,setUsers] = useState<User[]|null>(null)
  
  
useEffect(() => {
    (async () => {
      await initDb();
      //limparTabela();
      const userList = await getAllUsers();
      setUsers(userList);
      console.log('Usuários buscados do banco:', userList);
    })();
  }, []);
  
  // Se quiser monitorar as mudanças na variável users:
  useEffect(() => {
    console.log('Users atualizados no state:', users);
  }, [users]);
  return (

      <Redirect  href="/(tabs)/home" />
  );

}
