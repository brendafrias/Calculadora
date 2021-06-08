function Dividir( numeroUno, numeroDos){
    if(numeroUno == 0 || numeroDos == 0 ){
        return "No se puede dividir por cero";
    }else{
        return numeroUno / numeroDos;
    }
   
}

module.export = Dividir;


