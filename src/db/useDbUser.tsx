import { LoginUser, User } from "../types/Types";
import { getDb } from "./dbInit";

// `runAsync()` is useful when you want to execute some write operations.
 export async function addUsuario(user:User){
     const db =  await getDb()
     const result = await db.runAsync('INSERT INTO usuario (nome,email,senha,foto,posto) VALUES (?, ?, ?, ?, ?)',[user.nome,user.email,user.senha,user.foto,user.posto]);
     return result.lastInsertRowId
 }
 export async function updateUsuario(user:User){
    const db =  await getDb()
     await db.runAsync('UPDATE usuario SET nome=? email=? senha=? foto=? posto=? WHERE id = ?', [user.nome,user.email,user.senha,user.foto,user.posto,user.id]); // Binding unnamed parameters from variadic arguments
 }
 export async function deleteUsuario(id:number){    
    const db =  await getDb()
     await db.runAsync('DELETE FROM usuario WHERE id = ?',id); // Binding named parameters from object
 }
 export async function getLoginUser(login:LoginUser){ 
    const db =  await getDb()
    try {
        const user:User|null = await db.getFirstAsync('SELECT * FROM usuario WHERE email = ? AND senha = ?',[login.email,login.senha]);
        return user; // pode ser undefined/null se nao existir
    } catch (error) {
        console.error("Erro ao buscar primeiro usuário:", error);
        return null;
    }
 }
 export async function getAllUsers():Promise<User[]|null>{ 
    //db recebe a conexao
    const db =  await getDb()
    try {
        // getAllAsync() retorna um array de usuarios.
        const allRows:User[]|null = await db.getAllAsync('SELECT * FROM usuario');
        let usuarios:User[] =[]
        if(allRows){
        return usuarios = allRows.map((item)=>(item));
        }else{return []}
    } catch (error) {
        console.error("Erro ao buscar dos usuários:", error);
        return null
        
    }
  /*  {
            id:item.id,
            nome:item.nome,
            email:item.email,
            senha:item.senha,
            foto:item.foto,
            posto:item.posto}*/
       
     
 }

 


