import { Turno, TurnoStorge,} from "../types/Types";
import { getDb } from "./dbInit";

// `runAsync()` is useful when you want to execute some write operations.
 export async function addTurno(turno:TurnoStorge){
     const db =  await getDb()
     const result = await db.runAsync(
        'INSERT INTO turno (bombas,usuario,multicaixa,codigoQR,frota,totalSagriasPeriodica,totalSagrias,data) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [   turno.bombas,
            turno.usuario,
            turno.multicaixa,
            turno.codigoQR,
            turno.frota,
            turno.totalSagriasPeriodica,
            turno.totalSagrias,
            turno.data
        ]);
     return result.lastInsertRowId as number;
 }
 export async function updateTurno(turno:TurnoStorge){
    const db =  await getDb()
     await db.runAsync(
        'UPDATE turno SET bombas=? usuario=? multicaixa=? codigoQR=? frota=? totalSagriasPeriodica=? totalSagrias=? WHERE id = ?', 
        [   turno.bombas,
            turno.usuario,
            turno.multicaixa,
            turno.codigoQR,
            turno.frota,
            turno.totalSagriasPeriodica,
            turno.totalSagrias,
            turno.data,
            turno.id,            
        ]); 
 }


 export async function deleteTurno(id:number){    
    const db =  await getDb()
     await db.runAsync('DELETE FROM turno WHERE id = ?',id); // Binding named parameters from object
 }

 export async function getAllTurnos():Promise<TurnoStorge[]|null>{ 
    //db recebe a conexao
    const db =  await getDb()
    try {
        // getAllAsync() retorna um array de turnos.
        const allRows:TurnoStorge[]|null = await db.getAllAsync('SELECT * FROM turno');
        let turnos:TurnoStorge[] =[]
        if(allRows){
        return turnos = allRows.map((item)=>(item));
        }else{return []}
    } catch (error) {
        console.error("Erro ao buscar dos Turnos:", error);
        return null
        
    }     
}

  export async function getTurnoById(id:number):Promise<TurnoStorge|null>{ 
    //db recebe a conexao
    const db =  await getDb()
    try {
        // getAllAsync() retorna um array de turnos.
        const turno:TurnoStorge|null = await db.getFirstAsync('SELECT * FROM turno WHERE id= ?',id);
        if(turno){
        return turno
        }else{return null}
    } catch (error) {
        console.error("Erro ao buscar dos Turnos:", error);
        return null
        
    }     
}


