import * as SQLite from 'expo-sqlite';

(async () => {
  const db = await SQLite.openDatabaseAsync('validator.db');
  await db.runAsync('DELETE validator');
  console.log('Dados apagados!');
})();