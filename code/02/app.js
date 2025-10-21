//const name = prompt(`Mis su nimi on?`);
//alert(`Tere ` + name + `!`);

//const number = prompt("sisesta süniaasta")
//alert(2025 - number)

//alert(`Sinu vanus on: ` + (2025 - prompt(`Sisesta oma vanus`)))

/*const year = prompt(`Sisesta oma sünniaasta`);
const currentYear = 2025;
const age = currentYear - year;
alert(`Sinu vanus on: ` + age);*/

// Ristküliku pindala arvutamine

/*const number1 = prompt(`Sisesta ristküliku külje pikkus A`)
const number2 = prompt(`Sisesta ristküliku küljepikkus B`)
const pindala = number1 * number2
alert(`Ristküliku pindala on: ` + pindala)*/

/*const width = prompt(`Sisesta ristküliku laius`)
const height = prompt(`Sisesta ristküliku kõrgus`)
const area = width * height
alert(`Ristküliku pindala on: ` + area)*/

// Temperatuuride arvutamine

/*const C = prompt(`Sisesta Celsiuse kraad`)
const Fahrenheit = C * 9 / 5 + 32
alert(`See on Fahrenheiti: ` + Fahrenheit)*/

/*const C = prompt(`Palun sisesta Celsiuse kraadides`)
const F = C * 9 / 5 + 32

alert(`Temperatuur Farenheit skaalal: ` + F)*/

//Tingimuslaused

/*const color = prompt(`Mis värvi on foori tuli?`)

if (color === `roheline`) {
    alert(`võid üle tee minna`)
} else {
    alert(`pead veel ootama`)
}*/

/*const color = prompt(`Mis värvi on foori tuli?`)
if (color=== `roheline`) {
    alert(`võid edasi sõita`)
} else if (color === `kollane`) {
    alert(`pead veel tükk aega ootama`)
} else if (color === `punane`) {
    alert(`oota veel pisut`)
} else {
    alert(`sellist värvi ei tohiks fooris olla`)
}*/

/*const password = prompt(`sisesta oma parool`)
const existingPassword = `admin123`
if (password === existingPassword) {
    alert(`Tere tulemast`)
} else {
    alert(`Vale parool`)
}*/

/*const password = prompt(`sisesta oma parool`)
const existingPassword = `admin123`
if (password !== existingPassword) {
    alert(`Vale parool`)
} else {
    alert(`Õige parool`)
}*/

/*const vanus = prompt(`Sisesta oma vanus`)
const täisealine = 18
if (vanus >= täisealine) {
    alert(`Täiseline`)
}
else {
    alert(`Alaeline`)
}*/

/*const age = prompt(`Sisesta oma vanus`)
alert(typeof age)*/

//KALKULAATOR

const number1 = Number(prompt(`Sisesta esimene arv`))
const number2 = Number(prompt(`Sisesta teine arv`))

const operator = prompt(`Sisesta teha? (+,-,/,*)`)

if (operator ===`+`) {
alert(number1+number2)
} 
else if (operator ===`-`) {
alert(number1-number2)
}
else if (operator ===`*`) {
    alert(number1*number2)
}
else if (operator ===`/`) {
    alert(number1/number2)
}
else {
    alert(`seda tehet ei saa teha`)
}

