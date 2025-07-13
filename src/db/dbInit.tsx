// import * as SQLite from 'expo-sqlite';

  
// export const db =  await SQLite.openDatabaseAsync('validator.db');
// // `execAsync()` is useful for bulk queries when you want to execute altogether.
// export async function initDb(){
   
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
// `);

// }