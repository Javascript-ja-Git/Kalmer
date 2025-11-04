
//Väljasta arvud 5 kuni 15
//while - tsükkel
/*let i = 0
while (i<5) {
    console.log(i);
    i++;
}*/

/*let i = 5
while (i<16) {
    console.log(i)
    i++;
}*/

//Do tsükkel

/*for (let i = 5; i < 15; i++) {
    console.log(i)
}*/

/*let a = 10
for (let i = 5; i <= 15; i++) {
    console.log(a)
}*/
/*i väätyus ajahetkel
<= millal lõpeb või kui palju teha
i++ naitab kasvusammu
loogiliste sulgude vahel käsk, mida teha
A on eksperiment täht mida loendada. ülemise A võib pm ära kustutada*/

//Do While tsükkel
/*let i=1
do {
console.log(i);
i++
} while (i<=5)*/

//Koosta programm, mis küsib arvu ja siis väljastab arvud nullisr kuini selle arvuni

/*const count = Number(prompt(`sisesta arv`))

let i = 0;
while (i <=count) {
    console.log(i);
    i++;
} */

//Leia käikude summa


/*const count = Number(prompt(`sisesta arv`))

let i = 0;
let sum = 0;
while (i <=count) {
    sum = sum +i
    console.log(i, sum);
    i++;
}*/ 

//Leia väärtus kui i ei ole 3

/*const count = Number(prompt(`sisesta arv`))

let i = 0;
let sum = 0;
while (i <=count) {
    if (i !== 3)
    sum = sum +i
    console.log(i, sum);
    i++;
} */

    //Leia vastus kui i ja summa on kokku üle 10ne

  /*  *const count = Number(prompt(`sisesta arv`))

let i = 0;
let sum = 0;
while (i <=count) {
    if (i !== 3) {
    sum = sum +i;
    } 
    if (sum > 10) {
    console.log(i, sum);
    } else {
        console.log(i);
    }
    i++;
}  miski asi siin ei tööta*/

//KIVI-PABER-KÄÄRID

/*const player1 = prompt(`Mängiga1, vali kivi-paber-käärid`)
const player2 = prompt(`Mängija2, vali kivi-paber-käärid`)
if (player1===player2) {
    alert(`viik`)
} else if (player1===`kivi` && player2 === `käärid`) {
    alert(`Mängija 1 võitis`) 
       } else if (player1 === `paber` && player2 === `kivi`) {
            alert(`Mängija 1 võitis`);
        } else if (player1 === `käärid` && player2 === `paber`) {
            alert(`mänhija 1 võitis`)
        } else {
            alert(`mängija 2 võitis`)
        }*/

//KIVI-PABER-KÄÄRID 3 võiduni

/*const player1 = prompt(`Mängiga1, vali kivi-paber-käärid`)
const player2 = prompt(`Mängija2, vali kivi-paber-käärid`)
if (player1===player2) {
    alert(`viik`)
} else if (player1===`kivi` && player2 === `käärid`) {
    alert(`Mängija 1 võitis`) 
       } else if (player1 === `paber` && player2 === `kivi`) {
            alert(`Mängija 1 võitis`);
        } else if (player1 === `käärid` && player2 === `paber`) {
            alert(`mänhija 1 võitis`)
        } else {
            alert(`mängija 2 võitis`)
        }*/

//FUNKTSIOONID

/*function add(a, b) {
    const sum = a+b;
    return sum;
}
const result = add(2, 3);
console.log(result);*/

/*function add(a, b) {
    const sum = a+b;
    return sum;
}
const result = add(2, 3);
console.log(add (2,3));
console.log(add (20,30));
console.log(add (200,3));*/

//kasutajanimega tervitus

/*function greeting(name) {
const message = `Tere, ` + name;
return message;
}

console.log(greeting(`Martti`)); */

//kasutaja käest nime küsimine

/*function greeting(name) {
const message = `Tere, ` + name;
return message;
}

const username = prompt(`Mis on sinu nimi`);
const message = greeting(username);
alert(message);*/

// Arvuta kolmnurga pindala

/*function triangleArea(base, height) {
    const area = (base * height) / 2;
    return area;
}
console.log(triangleArea (2,3));
console.log(triangleArea (20,30));*/

// pindala arvutamine kui tulem on negatiivne

/*function triangleArea(base, height) {
    if (base <= 0) {
        return `sellist kolmnurke ei eksisteeri`;
     }   else if (height<= 0) {
        return `sellist kolmnurke ei eksisteeri`;
     } 
     const area = (base * height) / 2;
    return area;
}
console.log(triangleArea (8,4));
console.log(triangleArea (-8,4));*/

/*function triangleArea(base, height) {
        if (base <= 0 || height <= 0) {
        return `sellist kolmnurke ei eksisteeri`;
     }
     const area = (base * height) / 2;
    return area;
}
console.log(triangleArea (8,4));
console.log(triangleArea (-8,4));*/

// miski näide :)

/*function greeting(name) {
const message = `Tere, ` + name;
console.log(message)
return;
}
const result = greeting(`Martti`);

console.log(result);*/
