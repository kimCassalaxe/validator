import {  Bico, Bombas, } from "../types/Types";
import { getDb } from "./dbInit";

// `runAsync()` is useful when you want to execute some write operations.
export async function addBico(bico:Bico){
     const db =  await getDb()
     const result = await db.runAsync('INSERT INTO bico (numero,abertura,fecho) VALUES (?, ?, ?)',
        [   bico.n,
            bico.abertura,
            bico.fecho,
        ]);
     return result.lastInsertRowId as number;
 }
export async function updateBico(bico:Bico,id:number){
    const db =  await getDb()
     await db.runAsync(
        'UPDATE bico SET numero=?, abertura=?, fecho=? WHERE id = ?', 
        [   bico.n,
            bico.abertura,
            bico.fecho,
            id,            
        ]); 
 }

export async function deleteBico(id:number){    
    const db =  await getDb()
    const result = await db.runAsync('DELETE FROM bico WHERE id = ?',id);
    return result.lastInsertRowId as number
 }

export async function getAllBico():Promise<Bico[]|null>{ 
    //db recebe a conexao
    const db =  await getDb()
    try {
        // getAllAsync() retorna um array de turnos.
        const allRows:Bico[]|null = await db.getAllAsync('SELECT * FROM bico');
        let bicos:Bico[] =[]
        if(allRows){
        return bicos = allRows.map((item)=>(item));
        }else{return []}
    } catch (error) {
        console.error("Erro ao buscar dos Bombas:", error);
        return null
        
    }     
}
export async function getBicoByID(id:number):Promise<Bico|null>{ 
    //db recebe a conexao
    const db =  await getDb()
    try {
        // retorna o primeiro elemento com este id
        const bico:Bico|null = await db.getFirstAsync('SELECT * FROM bico WHERE id = ?',id);
        if(bico){
        return bico
        }else{return null}
    } catch (error) {
        console.error("Erro ao buscar dos Bombas:", error);
        return null
        
    }     
}

 