//alert(`hello world`)

/*const pin = Number(prompt(`sisesta pin: `));
const pinAsNumber = Number(pin);

console.log(pinAsNumber);*/

/*const pin = Number(prompt(`sisesta pin: `));
const pinAsNumber = Number(pin);

if(pinAsNumber) {
    alert(`sisend on korrektne`);
} else {
    alert(`sisend ei ole korrektne`);
}

console.log(Boolean(pinAsNumber));*/

//parooli ja kasutaja nime küsimine, minu versioon :)

/*const username = prompt(`sisesta kasutajatunnus`)
const existingUsername = `admin`
if (username === `admin`) {
    alert(`sisesta parool`)
} else {
   alert (`vale parool`)
}
const password = prompt(`sisesta parool`)
const existingPassword = `1234`

if (password === existingPassword) {
    alert(`Tere tulemast`)
} else {
    alert(`Vale parool`)
}*/

//programm, mis küsib KN ja parooli
//vastavalt andmetele peab saama tagasisidet
// kui ei sisestatud vastavat väärtust, kn ja parool
// kas sisestatud kn ja parool on õiged, kas saab ligipääsu

/*const username = prompt(`sisesta kasutanimi`);
if (username) {
    if (username === `admin`) {
        const password = prompt (`sisesta parool: `);
        if (password) {
            if (password === `1234`) {
                alert (`tere tulemast`);
            } else {
                alert (`sisestatud parool on vale`);
            }
        } else {
            alert(`sa ei sisestanud parooli`)
        }
    } else{
        alert(`sul ei ole ligipääsu õigust`);
    }

} else {
    alert(`sa ei sisestanud korrektset kasutajanime`)
}*/

// loo program mis küsib kasutajalt numbrit 1-100

/*const number = Number(prompt (`sisesta arv 1-100`));
if (number < 1 || number > 100) {
    alert (`sisestatud arv on vahemikus`);
} else {
    alert (`ei ole vahemikus`);
}*/
// AND

/*const number = Number(prompt (`sisesta arv 1-100`))
if (number >= 1 && number <= 100) {
    alert(`sisestatud on vahemikus`);
} else {
    alert(`ei ole vahemikus`);
}*/

// lisame funktsiooni

/*function checkIfInRange(number) {
    if (number >= 1 && number <= 100) {
     alert(`sisestatud on vahemikus`);
} else {
    alert(`ei ole vahemikus`);
}
}
const number = Number(prompt (`sisesta arv 1-100`));
checkIfInRange(number);*/

//  vahemiku ette andmine

/*function checkIfInRange(number, min, max) {
    if (number >= min && number <= max) {
     return true;
} else {
    return false;
}
}
const number = Number(prompt (`sisesta arv`));

console.log(checkIfInRange(number, 1, 100));
console.log(checkIfInRange(number, 20, 30));*/

//stringi pikkus
/*const firstName = `Tiina`;
console.log(firstName.length);*/

//kolmanda tähe küsimine

/*const firstName = `Tiina`;
console.log(firstName[2]); ///miskit mäda*/

//tähed ülevalt alla
/*const firstName = prompt(`sisesta nimi`)
for (let i=0; i<firstName.length; i++) {
    console.log(firstName[i]);
}*/

/*const carNumber = prompt(`sisesta auto nr:`)

alert(carNumber.toUpperCase());*/

/*const carNumber = prompt(`sisesta auto nr:`)
if (carNumber.includes(`EKL`)) {
    alert(`Läbipääsu lubatud`)
} else {
    alert(`läbipääs puudub`);
}*/

/*const carNumber = prompt(`sisesta auto nr:`)
if (carNumber.toLocaleUpperCase().includes(`EKL`)) {
    alert(`Läbipääsu lubatud`)
} else {
    alert(`läbipääs puudub`);
}*/
// massiivi lisamine
/*const carNumber = prompt(`sisesta auto nr:`)
const allowedCarNumbers = [`123EKL`, `234EKL`, `123ABC`]

if (allowedCarNumbers.includes(carNumber)) {
    alert(`Läbipääs lubatud`);
} else {
    alert (`läbipääs puudub`);
}*/
// kui on nii suured kui ka väikses tähed

/*const carNumber = prompt(`sisesta auto nr:`)
const allowedCarNumbers = [`123EKL`, `234EKL`, `123ABC`, `234BCD`]

if (allowedCarNumbers.includes(carNumber.toUpperCase())) {
    alert(`Läbipääs lubatud`);
} else {
    alert (`läbipääs puudub`);
}*/

//KAs tegu on emailiga?
/*function checkIfEmail(email) {
    if (!email.includes(`@`) || !email.includes(`.`)) {
        return false;
    } 
    return true;
}
const email = prompt(`Sisesta oma e-mail: `)

console.log(checkIfEmail(email));*/

/*const numbers = [1, 4, 5, 7, 8, 2, 9];

for (let i = 0; i < numbers.length; i++); {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i] + `on paaris arv`);
    } else {
        console.log(numbers[i] + `on paaritu arv`);
    }
} ei tööta*/

//küsi kasutajalt nimi ja kuva konsooli tähed ükshaaval nii,
// iga teine täht on suurtäht (paarituarvulised indeksid)

/*const firstName = prompt(`sisesta nimi: `);
   
for (let i=0; i<firstName.length; i++) {
    if (i % 2 === 0) { 
        console.log(firstName[i].toLowerCase());
    } else {
        console.log(firstName[i].toUpperCase())
    }
}*/

  //funktsiooniks muutmine
   
/*function capitalizeEveryOtherLetter(word) {
    for (let i=0; i<word.length; i++) {
    if (i % 2 === 0) { //kui indeks on paarisarv(aga jrkn paariu)
        console.log(word[i].toLowerCase());
    } else { // kui indeks paaritu aga jrkn paaris
        console.log(word[i].toUpperCase())
    }
}
}
const firstName = prompt(`sisesta nimi: `);

capitalizeEveryOtherLetter(firstName);*/

//iga täht suvaliselt, kas suur või väike
/*function capitalizeRandom(word) {
    for (let i=0; i<word.length; i++) {
    if (Math.random() < 0.5) { //kui indeks on paarisarv(aga jrkn paariu)
        console.log(word[i].toLowerCase());
    } else { // kui indeks paaritu aga jrkn paaris
        console.log(word[i].toUpperCase())
    }
}
}
const firstName = prompt(`sisesta nimi: `);

capitalizeRandom(firstName);*/

//tagastab arvud 0-5

/*function randomNumber() {
    const randomNumber = Math.floor(Math.random() *6);
    return randomNumber;
}

console.log (randomNumber());*/

// seda tsüklit 10 000 jooksutada ja peetakse arvestust nr üle mis tulid
function randomNumber() {
    const randomNumber = Math.floor(Math.random() *6);
    return randomNumber;
}
const counter = [0, 0, 0, 0, 0, 0];
for (let i = 0; i < 10000; i++) {
   counter[randomNumber()] +=1;
}

console.log (randomNumber());