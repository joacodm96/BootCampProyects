//1 Crear una funcionque tome una palabra y determine si empieza con 'G'
const startWithG = (word) => {
    return word.startsWith("G");
}
console.log(startWithG("thom"));
console.log(startWithG("joaquin"));
console.log(startWithG("Gustavo"));

//2 Crear una funcion que toma un arreglo de nombre y devuelve otro 
//solo con lo que empieza con 'G'

const namesWithG = (names) => {
    return names.filter(startWithG);
}
console.log(namesWithG(['Barbara', 'Cristian', 'Gino', 'Isadora', 'Joaquín', 'Manuel', 'Ramiro']));

//3 Crear una funcion que tome un numero y devuelta su valor absoluto

const abs = (num) => Math.abs(num);

console.log("Obtencion de numeros absolutos");
console.log(abs(1), abs(-6), abs(0));

//4 Crear una funcion que tome un arreglo de numeros y devuelva su valor absoluto

//const absArray = (numbers) => {
//    return numbers(Math.abs([numbers]));
//}
const absArray = (numbers) => {
    return numbers.map(abs);
}

console.log("Obtencion de Array Absoluto. [1,-6,0]");
console.log(absArray([1, -6, 0]));

// Extra
// Crear una función que tome un arreglo de números y devuelva su suma


const sum = (numbers) => {
    return numbers.reduce((acum, num) => acum + num);
}
console.log("Suma de los elementos de un arreglo");
console.log(sum([3, 2, 1, 5]));

// Ahora hacer lo mismo pero sin usar ningúna otra función o sentencia
// Ni reduce, ni forEach, ni for

const sumNoFunctions = (numbers) => {
    return numbers[0] + sum(numbers.slice(1, numbers.length));
}

console.log("Suma de un arreglo sin funciones sobre el arreglo.")
console.log(sumNoFunctions([3, 2, 1, 4]));