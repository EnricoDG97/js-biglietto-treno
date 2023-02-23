/* 
Il programma dovrà chiedere all'utente il numero di chilometri 
che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale 
del viaggio, secondo queste regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65.
-L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.
*/

/* 
-memorizzare e chiedere numero kilometri da percorrere
-memorizzare e chiedere l'età del passeggero
-memorizzare prezzo biglietto 0.21€/km
-IF cliente < 18 anni:
    applocare sconto 20%
-ELSE IF cliente > 65 anni:
    applicare sconto 40%
-ELSE cliente >18 anni e <65 anni
    applicare prezzo pieno
-stampare prezzo finale con massimo due decimali.
*/

// memorizzare e chiedere numero kilometri da percorrere
let costumerKm = parseInt(prompt("Quanti kilometri desideri percorrere?"));
console.log("Inseriti kilometri da percorrere: " + costumerKm);

// memorizzare e chiedere l'età del passeggero
let costumerAge = parseInt(prompt("Quanti anni dichiari di avere?"));
console.log("Inserita età del cliente: " + costumerAge);

// memorizzare prezzo biglietto 0.21€/km
// test
let ticketPrice = (costumerKm * 0.21);
// console.log(ticketPrice);
let ticketPriceRounded = Math.round((ticketPrice + Number.EPSILON) * 100) / 100;
// console.log(`Prezzo di prova: ${ticketPriceRounded}`);

// aggiunta variabili
let priceUnderAge;
let priceOverAge;

// -IF cliente < 18 anni:
if (costumerAge < 18) {
    priceUnderAge = Math.round(((ticketPrice - ((ticketPrice * 20) /100)) + Number.EPSILON) * 100) /100;
    console.log(`Prezzo finale per minorenne: ${priceUnderAge}`)
// -ELSE IF cliente > 65 anni:
} else if (costumerAge > 65) {
    priceOverAge = Math.round(((ticketPrice - ((ticketPrice * 40) /100)) + Number.EPSILON) * 100) /100;
    console.log(`Prezzo finale per adulto over65: ${priceOverAge}`)
// -ELSE cliente >18 anni e <65 anni
} else {
    console.log(`Prezzo finale per adulto: ${ticketPriceRounded}`) 
}
