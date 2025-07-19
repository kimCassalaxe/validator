





export type passwordUpdate={
    velhaSenha:string;
    novaSenha:string;
    confirmarSenha:string;
}
export type UserContextType = {
    user:User | null,
    setUser:(user:User|null) => void;
}

export type LoginUser = {
    senha:string,
    email:string,

}
export type User = {
    id:number,
    nome:string,
    email:string,
    senha:string,
    mecanografico?:string,
    foto?:string,
    posto?:string
}
export type BombaNumbre = [1,2,3,4,5,6,7,8,9,10];

export type Bico = {
    n:number
    abertura:number,
    fecho:number,
}
export type Bomba = {
    n:number,
    gasoleo:Bico,
    gasolina1:Bico,
    gasolina2:Bico,
}
export type BombaDB = {
    n:number,
    gasoleo:number,
    gasolina1:number,
    gasolina2:number,
}
export type Bombas = {
    id:number,
    n:number,
    gasoleo:number,
    gasolina1:number,
    gasolina2:number,
}

export type Turno = {
    id:number,
    bombas: Bomba[]|string,
    usuario:number,
    multicaixa: number,
    codigoQR: number,
    frota: number,
    totalSagriasPeriodica: number,
    totalSagrias: number,
    data: string,
}
export type TurnoStorge = {
    id:number,
    bombas: string,
    usuario:number,
    multicaixa: number,
    codigoQR: number,
    frota: number,
    totalSagriasPeriodica: number,
    totalSagrias: number,
    data: string,
}