/*
@author: Francisco Fernández Navarro
#date: 16 de Diciembre de 2024

file '03-beginner-exercises'
*/

/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Esto es un comentario de una linia

// 2. Escribe un comentario en varias líneas

/*
Esto es
un comentario
de varias linias
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let myName = "Fran";
let age = 18;
let height = 1.78;
let isStudent = true;
let undefinedValue;
let nullValue = null;
let mySymbol = Symbol("mysymbol");
let myBigInt = BigInt(817245671876987986589716389471628379612983761289376129);
let bigIntN = 817245671876987986589716389471628379612983761289376129n;

// 4. Imprime por consola el valor de todas las variables
console.log(myName);
console.log(age);
console.log(height);
console.log(isStudent);
console.log(undefinedValue);
console.log(nullValue);
console.log(mySymbol);
console.log(myBigInt);
console.log(bigIntN);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myName);
console.log(typeof age);
console.log(typeof height);
console.log(typeof isStudent);
console.log(typeof undefinedValue);
console.log(typeof nullValue);
console.log(typeof mySymbol);
console.log(typeof myBigInt);
console.log(typeof bigIntN);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myName = "Roberto";
myAge = 19;
height = 1.81;
isStudent = false;
undefinedValue = undefinedValue;
nullValue = nullValue;
mySymbol = Symbol("mysymbool");
myBigInt = BigInt(817245671876987986589716389471628374322983761289376129);
bigIntN = 817245645676987986589716389471628379612983761289376129n;

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myName = 21;
myAge = "Fran";
height = 180;
isStudent = 7;
undefinedValue = "Hola";
nullValue = false;
mySymbol = 1.56;
myBigInt = true;
bigIntN = 12;

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const myNameConst = "Fran";
const myAgeConst = 18;
const heightConst = 1.78;
const isStudentConst = true;
const undefinedValueConst = undefinedValue;
const nullValueConst = null;
const mySymbolConst = Symbol("mysymbol");
const myBigIntConst = BigInt(817245671876987986589716389471628374322983761289376129);
const bigIntNConst = 817245645676987986589716389471628379612983761289376129n;

// 9. A continuación, modifica los valores de las constantes
// myNameConst = "Roberto"; // Error: Assignment to constant variable.
// myAgeConst = 19; // Error: Assignment to constant variable.
// heightConst = 1.81; // Error: Assignment to constant variable.
// isStudentConst = false; // Error: Assignment to constant variable.
// undefinedValueConst = undefinedValue; // Error: Assignment to constant variable.
// nullValueConst = nullValue; // Error: Assignment to constant variable.
// mySymbolConst = Symbol("mysymbool"); // Error: Assignment to constant variable.
// myBigIntConst = BigInt(817245671876987986589716389471628374322983761289376129); // Error: Assignment to constant variable.
// bigIntNConst = 817245645676987986589716389471628379612983761289376129n; // Error: Assignment to constant variable.
