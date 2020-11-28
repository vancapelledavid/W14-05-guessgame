//vraag gebruiker om naam
let yourName=prompt('Hallo, wat is je naam?');
// begroet gebruiker
alert('Hey ' + yourName);
//maak random getal tussen 0 en 25
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
 
let numberToGuess= getRandomIntInclusive(0, 25);
//print randomnummer in console
console.log(numberToGuess);

//maak loop waarin nummer wordt gevraagd totdat het goed is
 let guessedNumber;

while(guessedNumber != numberToGuess){
 guessedNumber = prompt ('raaie, raaie, raaie tussen 1 and 25'); 
 if(guessedNumber == numberToGuess){
  alert('Helemaal Goed! Einde.')
}else{
  alert('Fout!! Nog eens!')
}
}

// Uitdaging
// Een gebruiker krijgt maximaal 5 pogingen om het getal te raden.
// Als gebruiker wil ik na elke poging een nieuw bericht zien die mij verteld hoeveel pogingen ik nog over heb.
// Als gebruiker wil ik een bericht zien als ik helemaal geen pogingen meer over heb. Het spel is nu af.
// Zelf de range bepalen waaruit de gebruiker gaat raden.
// Als gebruiker wil ik bij de start van het spel gevraagd worden wat het kleinste en het grootste nummer is dat ik wil raden.
// Als gebruiker speel ik nu het spel met de nummer-range die ik heb aangegeven bij de start van het spel.