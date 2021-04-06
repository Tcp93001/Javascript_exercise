// PRIMERA SESION
// ********************************************************

// var time = 23;
// var greeting;

// if (time >= 0 && time < 12) {
//   greeting = "Good Morning";
// } else if (time >= 12 && time < 20) {
//   greeting = "Good Afternoon";
// } else if (time >= 20 && time < 24) {
//   greeting = "Good Evening"
// } else {
//   greeting = "Unknown hour"
// }

// console.log(greeting);


// var day = 15;
// var text;

// switch (day) {
//   case 0:
//     text = "Domingo";
//     break;
//   case 1:
//     text = "Lunes";
//     break;
//   case 2:
//     text = "MArtes";
//     break;
//   case 3:
//     text = "Mirecoles";
//     break;
//   case 4:
//     text = "Jueves";
//     break;
//   case 5:
//     text = "Viernes";
//     break;
//   case 6:
//     text = "Sabado";
//     break;
//   default:
//     text = "Error"
// }

// console.log(text);

//

// let speed = "este" + " " + "texto";
// let message;

// if (speed > 100) {
//   message = "Vas muy rápido"
// } else {
//   message = "Estás en el limite apropiado"
// }
// let message = speed ? "gracias por el dato" : "falta infromacion"

// console.log(speed);

// SEGUNDA SESION
// ****************************************

// for (let i = 1; i <= 201; i = i + 10) {
//   console.log("hello world");
// }

// let i = 0;

// while(i < 200) {
//   console.log('HEllo world');
//   i++
// }


// for(let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }


// Un número primo es número mayor a 1 que sólo es divisible entre 1 y sí mismo.

// for(let counter = 2; counter <= 100; counter++){
//   let isPrime = true;

//   for(let i = 2; i < counter; i++) {
//     if(counter % i === 0) {
//       isPrime = false;
//     }
//   }

//   if(isPrime) {
//     console.log(counter);
//   }

// }


/// TERCERA SESIÓN
// **************************************************

// function calculateAge(birthYear) {
//   let age = 2021 - birthYear;
//   return age;
// }

// const edadJose = calculateAge(1969);

// console.log('Esta es mi edad ', edadJose);


// function yearsUntilRetirement(year, name) {
//   const age = calculateAge(year);
//   const retirement = 65 - age;
//   console.log(name + ' retires in ' + retirement + ' years.');
  // console.log(`${name} retires in ${retirement} years.`);
// }

// yearsUntilRetirement(1990, 'Jose');


// function power(base, exponent) {
//   let result = 1;

//   for (i = 0; i < exponent; i++) {
//     result *= base
//   };

//   return result;
// }

// console.log('este esel resultado ', power(3, 4));

// const resultadoDeMultiplicacion = function(number) { return number * number};

// console.log('rsultado ', resultadoDeMultiplicacion(3));

// (function(firstName, apellido) {
//   console.log("Mi nombre es: " + firstName + " y mi apellido es: " + apellido);
// })(`Jose`, "Guerrero");

// (function obtenerNumeroMayor(numero1, numero2) {

//   if (numero1 === numero2) {
//     console.log("los numeros son iguales");
//   } else if (numero1 > numero2) {
//     console.log('El numero mayor es: ', numero1);
//   } else {
//     console.log('El numero mayor es: ', numero2);
//   }

//   console.log(numero1 === numero2 ? "los numeros son iguales"
//                 : numero1 > numero2 ? 'El numero mayor es: ' + numero1
//                   :'El numero mayor es: ' + numero2);

// })("jose", 10);


// // [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

// function fibonacci(numero) {
//   if (numero <= 1) return 1;

//   return fibonacci(numero - 1) + fibonacci(numero - 2);
// }

// function secuenciaFibonacci(limite) {
//   if (limite < 1) return console.log("Limite debe ser mayor que cero")

//   for (let i = 0; i < limite; i++) {
//     console.log(fibonacci(i));
//   }
// }

// secuenciaFibonacci(8);


// CUARTA SESIÓN
// **************************************

// Listas //
// let numbers = [1, 3, 4, 7, 2, 1, 9, 0, 18, 32] //arreglo inicial

// //[2, 6, 8, 14, 4, 2, 18, 0] // arreglo final

// function multiplicarPorDos(numbers) {
//   let arregloFinal = [];

//   for(let i = 0; i < numbers.length; i++) {
//     arregloFinal.push(numbers[i] / 2)
//   }

//   return arregloFinal;
// }

// const resultadoOperacion = multiplicarPorDos(numbers);
// console.log("este es elresultado ======>>>> ", resultadoOperacion);


// const edades = [25, 40, 35, 34, 26, 18, 17, 65, 59];

// function promedio(edades) {
//   let sum = 0;

//   for (let i = 0; i < edades.length; i++) {
//     sum += edades[i];
//   }

//   return sum / edades.length
// }

// console.log("Este es el promedio: ", promedio(edades));

// let car = {
//   brand: 'Nissan',
//   model: 'Versa',
//   year: 2021
// }

//[['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]] //resultado esperado

// // Función que convierte un objeto a un array de pares de [propiedad,valor]

// function keyValuePairs(datosAExplorar) {
//   let keys = Object.keys(datosAExplorar); // array car = ["brand", "model", "year"]
//   let pares = [];

//   for (let i = 0; i < keys.length; i++) {
//     pares.push([keys[i], datosAExplorar[keys[i]]]);
//   }

//   return pares;
// }

// console.log("Estos son los elementos ", keyValuePairs(car));


// //[['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]

// // Función que convierte un array a un objeto con propiedades

// function arrayToObject(arr) {
//   let object = {};

//   for (let i = 0; i < arr.length; i++) {
//     object[arr[i][0]] = arr[i][1];
//   }

//   return object;
// }

// console.log("Convirtiendo el array a un objeto ", arrayToObject(keyValuePairs(car)));

// let juan = {
//   nombre: "Juan",
//   apellido: "Lopez",
//   birthYear: 1969,
//   fechaNacimiento: 15,
//   calcularEdad: function() {
//     let today = new Date();
//     let year = today.getFullYear();

//     this.edad = year - this.birthYear;

//     return this.edad
//   }
// }


// let singers = [
//   { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
//   { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
//   { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
//   { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
// ];

// function pluck(list, propertyName) {
//   let values =[];

//   for (let i = 0; i < list.length; i++) {
//     values.push(list[i][propertyName]);
//   }

//   return values;

//   // return list.map(elem => elem[propertyName])
// }

// console.log(pluck(singers, "born")) // ['Steven Tyler', 'Karen Carpenter', 'Kurt Cobain', 'Chris Cornell']

// QUINTA SESIÓN
// ******************************************

// let juan = {
//   nombre: 'Juan',
//   birthYear: 1990,
//   job: 'Developer'
// }

// let Person = function(nombre, birthYear, job) {
//   this.nombre = nombre;
//   this.birthYear = birthYear;
//   this.job = job;
// }


// let juan = new Person('Juan', 1990, 'Developer');

// let Vector = function(x, y) {
//   this.x = x;
//   this.y = y;
// }

// let vector1 = new Vector(3, 4);
// let vector2 = new Vector(5, 2);

// Vector.prototype.plus = function(other) {
//   return new Vector(this.x + other.x, this.y + other.y);
// };

// Vector.prototype.minus = function(other) {
//   return new Vector(this.x - other.x, this.y - other.y);
// };

// Vector.prototype.length = function() {
//   return Math.sqrt(this.x * this.x + this.y * this.y);
// }

// console.log(vector1.plus(vector2)); // x1+x2,y1+y2
// console.log(vector1.minus(vector2));// x1-x2, y1-y2
// console.log(vector1.length()); // Math.sqrt(x1*x1 + y1*y1);

// let Person = function(name) {
//   this.name = name;
// }

// // let juan = new Person('Juan');

// let Developer = function(name, skills,yoe) {
//   Person.call(this, name);

//   this.skills = skills;
//   this.yoe = yoe;
// }

// let Group = function() {
//   this.members = [];
// } // {members: []};

// Group.from = function(collection) {
//   let group = new Group();

//   for(let i = 0; i < collection.length; i++) {
//     group.add(collection[i]);
//   }

//   return group;
// }
// Group.prototype.add = function(value) {
//   !this.has(value) && this.members.push(value)
// }

// Group.prototype.has = function(value) {
//   return this.members.includes(value)
// }

// let numeros = Group.from([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 10])

// console.log(numeros) // Group members { members: [1, 2, 3, 4,5]}
// // console.log(group.has(5)); // true
// console.log(group.add([10])) // { members: [1, 2, 3, 4, 5, 10]}


/// SEXTA SESIÓN
// ****************************************


// var numbers = [1, 2, 3, 4, 5];
// var doubles = [];

// for(var i = 0; i < numbers.length; i++) {
// 	doubles.push(numbers[i] * 2);
// }

// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(doubles); // [2, 4, 6, 8, 10]


// let numbers = [1, 2, 3, 4, 5];
// let sumaCinco =numbers.map(function(element) {
//   return element + 5;
// })

// // let multiplicaPorDiez = numbers.map((element) => element * 10);

// console.log('SumaCinco es igual a ', sumaCinco)
// console.log('multiplicaPorDiez es igual a ', multiplicaPorDiez)

// //funcion pura
// function add(a, b) {
// 	return a + b;
// }

// let car = {
// 	brand: 'Nissan',
// 	model: 'Sentra',
// 	year: 2020
// }

// let miCarro = {
// 	brand: 'Nissan',
// 	model: 'Sentra',
// 	year: 2009
// }

// function addColor(car) {
//   let newCar = Object.assign({}, car, {
//     color: 'Black'
//   });

//   return newCar;
// }
// let newCar = addColor(car);

// let miNuevoCarro = addColor(miCarro);

// console.log('newCar', newCar);
// console.log('mi nuevocarro', miNuevoCarro);

// let cart = [
//   {
//     item: 'Laptop',
//     quantity: 1
//   }
// ]

// Muta la variable cart
// function addItemToCart(item, quantity) {
//   cart.push({
//     item: item,
//     quantity: quantity
//   })
// }


// No muta la variable cart

// function addItemToCart(item, quantity) {
//   let newCart = cart.map(function(element) {
//     return element;
//   })

//   newCart.push({
//     item: item,
//     quantity: quantity
//   })

//   return newCart;
// }

// cart = addItemToCart('Phone1', 1);

// console.log(cart)

// let numbers = [1, 2, 3, 4, 5];
// let doubles = numbers.map(function(number) {
//     return number * 2;
// });

// let numerosPares = numbers.filter(function(number) {
//   return number % 2 === 0
// })

// let numerosImpares = numbers.filter(function(number) {
//   return number % 2 !== 0
// })

// let sumaArray = numbers.reduce(function(acumulador, valorActual) {
//   return acumulador + valorActual
// }, 0)

// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(doubles); // [2, 4, 6, 8, 10]
// console.log(numerosPares)
// console.log(numerosImpares)
// console.log(sumaArray)

// Input: 12345

//  -- 1 + 2 + 3 + 4 + 5 = 15

//  Output: 15

// let number = 12345

// // let string = number.toString();

// // let array = string.split('');

// let array = number.toString().split('');

// console.log(number)
// // console.log(string)
// console.log(array)

// let arrayOfNumbers = array.map(function(number) {
//   return Number(number)
// })

// console.log(arrayOfNumbers)

// let sum = arrayOfNumbers.reduce(function(acumulador, valorActual) {
//   return acumulador + valorActual
// }, 0)

// console.log(sum)

// function sumarDigitos(number) {
//   return  number
//           .toString()
//           .split('')
//           .map(Number)
//           .reduce(function(acumulador, valorActual) {
//             return acumulador + valorActual
//           }, 0)
// }

// console.log(sumarDigitos(546372));

// Sin utilizar el método flat()
function flatten(arrays) {
  return arrays.reduce(function(acumulador,valorActual) {
    return acumulador.concat(valorActual)
  }, [])
}

let arrays = [
  [1, 2, 3],
  [4, 5],
  [6]
];

let array = flatten(arrays); //[1, 2, 3, 4, 5, 6]
console.log(array)

// Crear una función compact que recibe un arreglo y retorna un nuevo arreglo sin incluir los valores que sean falsy.

// function compact(array) {
//   ...
// }

// var array = [0, 1, false, 2, '', 3];
// var compactedArray = compact(array);

// console.log(compactedArray); // [1, 2, 3]

// Crear una función de alto orden loop que será similar a un for. Recibe value, una función test, una función update y una función body. En cada iteración se debe ejecutar la función test y terminar el ciclo si la función retorna false. Después se ejecuta la función body dándole como argumento el value actual. Por último se ejecuta la función update para crear un nuevo valor y se repite el proceso.

// function loop(start, test, update, body) {
//   ...
// }

// var test = function(n) {
//   return n > 0;
// }

// var update = function(n) {
//   return n - 1;
// }

// loop(3, test, update, console.log);
// // 3
// // 2
// // 1