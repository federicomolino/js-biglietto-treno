const priceKm = 0.21;
let numberKm = prompt ('Inserisci il numero di km che vuoi percorrere');

//verfico che sia un numero quello inserito
if(isNaN(numberKm)){

    console.log('Inserisci un numero')
// trasformo il type in numero e verifico che non sia < = 0
} else if (Number(numberKm)<=0){

    console.log('Inserisci un numero maggiore di 0')

} else{

    //moltiplico il numero inserito dall'utente con il prezzo fisso
    let priceTot = numberKm * priceKm
    //stampo prezzo finito con max 2 decimali e cambio il punto con la virgola
    console.log(`€${priceTot.toFixed(2).replace(".",",")}`)
}