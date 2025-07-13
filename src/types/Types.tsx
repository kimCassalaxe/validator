





export type BombaNumbre = [1,2,3,4,5,6,7,8,9,10];

export type Bico = {
    n:number
    abertura:number,
    fecho:number,
}
export type Bomba = {
    n:number
    gasoleo:Bico,
    gasolina1:Bico,
    gasolina2:Bico,
}

export type Turno = {
    bombas: Bomba[],
    multicaixa: number,
    codigoQR: number,
    frota: number,
    totalSagriasPeriodica: number,
    totalSagrias: number,
    data: string,
}