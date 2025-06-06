export function factorADadoP(interes:number,n:number){
    return ((interes*Math.pow((1+interes),n))/(Math.pow((1+interes),n)-1))
}

export function factorPDadoA(interes:number,n:number){
    return ((Math.pow((1+interes),n)-1)/(interes*Math.pow((1+interes),n)))
}

export function factorADadoF(interes:number,n:number){
    return (interes/((Math.pow((1+interes),n)-1)))
}

export function factorFDadoA(interes:number,n:number){
    return (((Math.pow((1+interes),n)-1))/interes)
}


export function factorFDadoP(interes:number,n:number){
    return (Math.pow(1+interes,n))
}

export function factorPDadoF(interes:number,n:number){
    return (Math.pow(1+interes,n*-1))
}

export const tiposDeFactores = [
  "A dado P (A/P)",
  "P dado A (P/A)",
  "P dado F (P/F)",
  "F dado P (F/P)",
  "F dado A (F/A)",
  "A dado F (A/F)",
] as const;
