 import * as SQLite from 'expo-sqlite';

 //a conexao comeca com nul
 let db: SQLite.SQLiteDatabase | null = null;

export async function getDb() {
  if (!db) {
    db = await SQLite.openDatabaseAsync('validator.db');
  }
  return db;
}
 // `execAsync()` is useful for bulk queries when you want to execute altogether.
 export async function initDb(){
  console.log("Iniciando o banco...");
  const db = await getDb()
   
 // criacao das tabelas.
 await db.execAsync(`CREATE TABLE IF NOT EXISTS bombas (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      numero INTEGER NOT NULL, 
      gasoleo INTEGER NOT NULL,
      gasolina1 INTEGER NOT NULL,
      gasolina2 INTEGER NOT NULL
    );
    CREATE TABLE IF NOT EXISTS turno (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      bombas TEXT NOT NULL, 
      usuario INTEGER NOT NULL,
      multicaixa INTEGER NOT NULL,
      codigoQR INTEGER NOT NULL,
      frota INTEGER NOT NULL,
      totalSagriasPeriodica INTEGER NOT NULL,
      totalSagrias INTEGER NOT NULL,
      data TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS bico (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      numero INTEGER NOT NULL, 
      abertura INTEGER NOT NULL,
      fecho INTEGER NOT NULL
    );
    CREATE TABLE IF NOT EXISTS usuario (
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      nome TEXT NOT NULL, 
      email TEXT NOT NULL,
      senha TEXT NOT NULL,
      foto TEXT,
      posto TEXT,
      mecanografico TEXT
    );
 `);

 }
 
