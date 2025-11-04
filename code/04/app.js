/*alert (`kood töötab`);*/

/*const weekdays = [`esmaspäev`, `teisipäev`, `kolmapäev`, `neljapäev`, `reede`, `laupäev`, `pühapäev`];
console.log(weekdays);*/ 

/*const weekdays = [`esmaspäev`, `teisipäev`, `kolmapäev`, `neljapäev`, `reede`, `laupäev`, `pühapäev`];
console.log(weekdays[2]); 
console.log(weekdays[4]); */

/*const weekdays = [`esmaspäev`, `teisipäev`, `kolmapäev`, `neljapäev`, `reede`, `laupäev`, `pühapäev`];
for (let i = 0; i <7; i++) {
    console.log(weekdays[i]);
}

console.log(weekdays.length);*/

/*const weekdays = [`esmaspäev`, `teisipäev`, `kolmapäev`, `neljapäev`, `reede`, `laupäev`, `pühapäev`];
for (let i = 0; i <weekdays.length; i++) {
    console.log(weekdays[i]);
}*/

//*console.log(weekdays.length);

/*const Temperatures = [];

const temp = prompt(`mitu kraadi on hetkel temperatuur`);

Temperatures.push(temp);

console.log(Temperatures);*/

/*const Temperatures = [];

for (let i = 1; i <=5; i++) {
const temp = Number(prompt(`mitu kraadi on hetkel temperatuur`));

Temperatures.push(temp);
}

console.log(Temperatures);*/

//keskmise tembi arvutamine, kokku liitmine

/*const Temperatures = [10, 12, 14, 12, 10];

/*for (let i = 1; i <=5; i++) {
const temp = Number(prompt(`mitu kraadi on hetkel temperatuur`));

Temperatures.push(temp);
} */

/*let sum = 0;

for (let i = 0; i < Temperatures.length; i++) {
    sum = sum + Temperatures[i];
    
}

console.log(sum);
console.log(Temperatures);

const Temperatures = [10, 12, 14, 12, 10];*/

/*for (let i = 1; i <=5; i++) {
const temp = Number(prompt(`mitu kraadi on hetkel temperatuur`));

Temperatures.push(temp);
} */

// KESKMISE ARVUTAMINE

/*const Temperatures = [10, 12, 14, 12, 10]
let sum = 0;

for (let i = 0; i < Temperatures.length; i++) {
    sum = sum + Temperatures[i];
    console.log(sum);
}
const average = sum / Temperatures.length;
console.log(average);

//MIS OLI MASSIIVI VIIMANE TEMP.

console.log(Temperatures[Temperatures.length -1]);*/

//10 NUMBRIT järjest

/*const numbers = [1, 21, 13, 44, 52, 6, 71, 8, 19, 10];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}*/

//need 10 nr tagurpidi reastatult

/*const numbers = [1, 21, 13, 44, 52, 6, 71, 8, 19, 10];

for (let i = numbers.length -1; i >= 0; i--) {
    console.log(numbers[i]);
}*/

//JKNR lisamine

/*const numbers = [1, 21, 13, 44, 52, 6, 71, 8, 19, 10];

for (let i = numbers.length -1; i >= 0; i--) {
    console.log(i +1, numbers[i]);
}*/

//KM HINDADE lisamine

/*const prices = [1, 21, 13, 44, 52, 6, 71, 8, 19, 10];

for (let i = 0; i < prices.length; i++) {
    console.log(prices[i] * 1.24);
}*/

//KUVA IGA TEINE ARV VAÄJA
/*const prices = [1, 21, 13, 44, 52, 6, 71, 8, 19, 10];

for (let i = 0; i < prices.length; i = i + 2) {
    console.log(prices[i] * 1.24);
}*/

//KUIDAS saada kätte nt kolmapäev

/*const weekdays = [`esmaspäev`, `teisipäev`, `kolmapäev`, `neljapäev`, `reede`, `laupäev`, `pühapäev`];
console.log(weekdays[2]);*/

//KUIDAS muuta kirjaviga

/*let k = `kolmapaev`

k = `kolmapäev`
console.log(k);
const weekdays = [`esmaspäev`, `teisipäev`, `kolmapaev`, `neljapäev`, `reede`, `laupäev`, `pühapäev`];
*/
// VÕI...
/*const weekdays = [`esmaspäev`, `teisipäev`, `kolmapaev`, `neljapäev`, `reede`, `laupäev`, `pühapäev`];
weekdays[2] = `kolmapäev`
console.log(weekdays);
*/

// ----
// Math objekt

//console.log(Math.PI)
//console.log(Math.random())

// Allahindluse randon

/*const sales = [10, 5, 15,20]
const randomNumber = Math.floor(Math.random() *4)
console.log(sales[randomNumber])*/

//VÕI

/*const sales = [10, 5, 15, 20]
const randomNumber = Math.ceil(Math.random() *4) - 1;
console.log(sales[randomNumber])*/

// Funktsioon, mis tagastab arvud vahemikus 1-6

/*function dice () {
const randomNumber= Math.ceil(Math.random() *6);
    return randomNumber;
}*/

// maksimaalse numriga random

/*function dice(Number) {
const randomNumber= Math.ceil(Math.random() *Number);
    return randomNumber;
}

const maxNumber = Number(prompt(`Palun sisesta max juhuarv`))
console.log(dice(maxNumber)); */
//või consol logi asemel // alert(dice(maxNumber))

// JUHUSLIKU NIME VALIMINE

const names = [`Jaan`, `Juta`, `Kalle`, `Malle`, `Juhan`, `Tiina`];

function dice(Number) {
const randomNumber= Math.ceil(Math.random() *Number);
    return randomNumber;
}
const randomNumber = dice(names.length)
console.log(names[randomNumber -1]); //kolmanda nime puhul 4-1
