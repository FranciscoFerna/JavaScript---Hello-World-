/*
@author: Francisco Fernández Navarro
#date: 16 de Diciembre de 2024

file '04-operators'
*/

// Operadores aritmeticos

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicació
console.log(a / b) // División

console.log(a % b) // Módulo
console.log(a ** b) // Exponente

a++ // Incremento de la variable a
console.log(a)

b-- // Decremento de la variable a
console.log(b)

// Operadores de asignación

let myVariable = 2
console.log(myVariable)
myVariable += 2 // Suma con asignación
console.log(myVariable)

myVariable -= 2 // Resta con asignación
myVariable *= 2 // Multiplicacion con asignación
myVariable /= 2 // Division con asignación
myVariable %= 2 // Modulo con asignación
myVariable **= 2 // Exponente con asignación

// Operadores de comparación

console.log(a > b) // Mayor que
console.log(a < b) // Menor que
console.log(a >= b) // Mayor o igual que
console.log(a <= b) // Menor o igual que
console.log(a == b) // Igualdad por valor
console.log(a == 6)
console.log(a == "6")
console.log(a == a)
console.log(a === a) // Igualdad por identidad (por tipo y valor) o igualdad estricta
console.log(a === 6)
console.log(a === "6")
console.log(a != 6) // Desigualdad por valor
console.log(a !== "6") // Desigualdad por identidad (por tipo y valor) o desigualdad estricta
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)

/*
Truthy values (valores verdaderos)

- Todos los numeros positivos y negativos menos el cero
- Todas las cadenas de texto menos las vacías
- El boolean true
*/

/*
Falsy values (valores falsos)

- 0
-  0n
- null
- undefined
- NaN (Not a Number)
- El boolean false
- Cadenas de texto vacías
*/

// Operadores lógicos

// and (&&)
console.log(7 > 30 && 37 > 20)
console.log(7 < 30 && 37 < 20)
console.log(7 < 30 && 37 > 20)
console.log(7 > 30 && 37 > 20 && 30 > 40)

// or (||)
console.log(7 > 30 || 37 > 20)
console.log(7 < 30 || 37 < 20)
console.log(7 < 30 || 37 > 20)
console.log(7 > 30 || 37 > 20 || 30 > 40)

console.log(7 > 30 && 37 > 20 || 30 < 40)

// not (!)
console.log(!true)
console.log(!false)
console.log(!(7 > 30 && 37 > 20))
console.log(!(7 > 30 || 37 > 20))

// Operadores ternarios

const isRaining = true
isRaining ? console.log("Esta lloviendo brother") : console.log("No está lloviendo")
