// Aqui estan los ejercicios de la primera sesión

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


/// Sesion 3 Funciones

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

(function obtenerNumeroMayor(numero1, numero2) {

  if (numero1 === numero2) {
    console.log("los numeros son iguales");
  } else if (numero1 > numero2) {
    console.log('El numero mayor es: ', numero1);
  } else {
    console.log('El numero mayor es: ', numero2);
  }

  console.log(numero1 === numero2 ? "los numeros son iguales"
                : numero1 > numero2 ? 'El numero mayor es: ' + numero1
                  :'El numero mayor es: ' + numero2);

})("jose", 10);


// [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

function fibonacci(numero) {
  if (numero <= 1) return 1;

  return fibonacci(numero - 1) + fibonacci(numero - 2);
}

function secuenciaFibonacci(limite) {
  if (limite < 1) return console.log("Limite debe ser mayor que cero")

  for (let i = 0; i < limite; i++) {
    console.log(fibonacci(i));
  }
}

secuenciaFibonacci(8);
