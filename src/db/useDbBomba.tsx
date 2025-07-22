import { BombaDB, Bombas, } from "../types/Types";
import { getDb } from "./dbInit";

// `runAsync()` is useful when you want to execute some write operations.
 export async function addBomba(bomba:BombaDB){
     const db =  await getDb()
     const result = await db.runAsync(
        'INSERT INTO bombas(numero,gasoleo,gasolina1,gasolina2) VALUES (?, ?, ?, ?)',
        [   bomba.n,
            bomba.gasoleo,
            bomba.gasolina1,
            bomba.gasolina2
        ]);
     return result.lastInsertRowId as number
 }
 export async function updateBomba(bomba:BombaDB){
    const db =  await getDb()
     await db.runAsync(
        'UPDATE bombas SET n=? gasoleo=? gasolina1=? gasolina2=? WHERE id = ?', 
        [   bomba.n,
            bomba.gasoleo,
            bomba.gasolina1,
            bomba.gasolina2,
                        
        ]); 
 }


 export async function deleteBomba(id:number){    
    const db =  await getDb()
     await db.runAsync('DELETE FROM bombas WHERE id = ?',id); // Binding named parameters from object
 }

 export async function getAllBombas():Promise<Bombas[]|null>{ 
    //db recebe a conexao
    const db =  await getDb()
    try {
        const allRows:Bombas[]|null = await db.getAllAsync('SELECT * FROM bombas');
        let bombas:Bombas[] =[]
        if(allRows){
        return bombas = allRows.map((item)=>(item));
        }else{return []}
    } catch (error) {
        console.error("Erro ao buscar dos Bombas:", error);
        return null
        
    }     
}
export async function getBombasByID(id:number):Promise<Bombas|null>{ 
    //db recebe a conexao
    const db =  await getDb()
    try {
        const bomba:Bombas|null = await db.getFirstAsync('SELECT * FROM bombas WHERE id=?',id);
        return bomba
    } catch (error) {
        console.error(`error ao buscar a bomba com id = ${id}`);
        return null
        
    }     
}

 