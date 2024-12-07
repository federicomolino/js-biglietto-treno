const priceKm = 0.21;


let numberKm = prompt ('Inserisci il numero di km che vuoi percorrere');
let agePerson = prompt ('Quanti anni hai?');

//verfico che entrambi siano numeri quelli inseriti
if(isNaN(numberKm) || isNaN (agePerson)){

    console.log('Entrabe le richieste devono avere un valore numerico, grazie');

// trasformo il type in numero e verifico che non sia < = 0
} else if (Number(numberKm) && Number(agePerson) <=0){

    console.log('Entrabe le richieste devono avere un valore numerico maggiore di 0, grazie');

} else{

    //moltiplico il numero inserito dall'utente con il prezzo fisso
    let priceTot = numberKm * priceKm;
    let priceFinal = priceTot;

    //controllo che l'età sia <= 18 + calcolo
    if(agePerson <= 18){
        priceFinal = (priceTot * 20)/100;
        let priceFinalScount = priceTot - priceFinal

        
        //stampo prezzo finito con max 2 decimali e cambio il punto con la virgola, con sconto Min 18
        console.log(`€${priceFinalScount.toFixed(2).replace(".",",")}`);


    //controllo che l'età sia >= di 65 + calcolo
    }else if (agePerson >= 65) {
        priceFinal = (priceTot * 40)/100;
        let priceFinalScount = priceTot - priceFinal

        //stampo prezzo finito con max 2 decimali e cambio il punto con la virgola, con sconto 0ver 65
        console.log(`€${priceFinalScount.toFixed(2).replace(".",",")}`);

    }else{
        
        //stampo prezzo finito con max 2 decimali e cambio il punto con la virgola
        console.log(`€${priceFinal.toFixed(2).replace(".",",")}`);
    }
}