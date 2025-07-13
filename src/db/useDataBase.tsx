// import * as SQLite from 'expo-sqlite';

  

// // `execAsync()` is useful for bulk queries when you want to execute altogether.
// async function initDb(){
//     const db =  await SQLite.openDatabaseAsync('validator.db');
// // Note that `execAsync()` does not escape parameters and may lead to SQL injection.
// await db.execAsync(`
// CREATE TABLE IF NOT EXISTS bombas (
//     id INTEGER PRIMARY KEY NOT NULL AUTO INCREMENT, 
//     numero INTEGER NOT NULL, 
//     gasoleo INTEGER NOT NULL,
//     gasolina1 INTEGER NOT NULL,
//     gasolina2 INTEGER NOT NULL,
//     intValue INTEGER
// );
// CREATE TABLE IF NOT EXISTS turno (
//     id INTEGER PRIMARY KEY NOT NULL AUTO INCREMENT, 
//     bombas TEXT NOT NULL, 
//     usuario INTEGER NOT NULL,
//     multicaixa INTEGER NOT NULL,
//     codigoQR INTEGER NOT NULL,
//     frota INTEGER NOT NULL,
//     totalSagriasPeriodica INTEGER NOT NULL ,
//     totalSagrias INTEGER NOT NULL,
//     data TEXT NOT NULL,
//     intValue INTEGER
// );
// CREATE TABLE IF NOT EXISTS bico (
//     id INTEGER PRIMARY KEY NOT NULL AUTO INCREMENT, 
//     numero INTEGER NOT NULL, 
//     abertura INTEGER NOT NULL,
//     fecho INTEGER NOT NULL
// );
// CREATE TABLE IF NOT EXISTS usuario (
//     id INTEGER PRIMARY KEY NOT NULL AUTO INCREMENT, 
//     nome TEXT NOT NULL, 
//     email TEXT NOT NULL,
//     senha TEXT NOT NULL,
//     foto TEXT,
//     posto TEXT
// );
// INSERT INTO test (value, intValue) VALUES ('test1', 123);
// INSERT INTO test (value, intValue) VALUES ('test2', 456);
// INSERT INTO test (value, intValue) VALUES ('test3', 789);
// `);}

// // `runAsync()` is useful when you want to execute some write operations.
// async function addUsuario(nome:string,email:string,senha:string,foto:string,posto:string){
//     const db =  await SQLite.openDatabaseAsync('validator.db');
//     const result = await db.runAsync('INSERT INTO usuario (nome,email,senha,foto,posto) VALUES (?, ?)', nome,email,senha,foto,posto);
//     return result.lastInsertRowId
// }
// async function updateUsuario(id:number,nome:string,email:string,senha:string,foto:string,posto:string){
//     const db =  await SQLite.openDatabaseAsync('validator.db');
//     await db.runAsync('UPDATE usuario SET nome=? email=? senha=? foto=? posto=? WHERE id = ?', nome,email,senha,foto,posto,id); // Binding unnamed parameters from variadic arguments
// }
// async function deleteUsuario(id:number){    
//     const db =  await SQLite.openDatabaseAsync('validator.db');
//     await db.runAsync('DELETE FROM usuario WHERE id = ?',id); // Binding named parameters from object
// }
// async function getFisrtUsuario(){ 
//     const db =  await SQLite.openDatabaseAsync('validator.db'); 
// // `getFirstAsync()` is useful when you want to get a single row from the database.
// const firstRow = await db.getFirstAsync('SELECT * FROM usuario');
// }
// async function getAllUsuario(){ 
//     const db =  await SQLite.openDatabaseAsync('validator.db'); 
// // `getAllAsync()` is useful when you want to get all results as an array of objects.
//     const allRows = await db.getAllAsync('SELECT * FROM usuario');
//     let usuarios =[]    
//     if(allRows){ 
//        return usuarios = allRows.map(item=>{return item})
//     }
// }
// export default {initDb,addUsuario,getFisrtUsuario,getAllUsuario,updateUsuario,deleteUsuario,}


