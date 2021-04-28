// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  return Object.entries(objeto);
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objReturn = {}
  for (let a in string) { //recorre cada letra index del string, que se transforma en letra com string[a]//
    if (objReturn[string[a]] === undefined) { objReturn[string[a]] = 1 } //si esta indefinido la agrega con la clave segun la letra y el numero 1//
    else objReturn[string[a]] += 1 //no esta definido entonces le suma 1 a el valor de la clave y lo guarda en la clave//
  }
  return objReturn;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var parteEnMinuscula = ""
  var parteEnMayuscula = ""
  for (let a in s) {
    if (esMayuscula(s[a])) { parteEnMayuscula += s[a] } //si es mayuscula va para un lado y si es minuscula va para otro
    else { parteEnMinuscula += s[a] }
  }
  function esMayuscula(letra) {
    return letra === letra.toUpperCase() //compara las letra entre mayusculas y minusculas//
  }
  return parteEnMayuscula + parteEnMinuscula;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var acumuladorDePalabras = "";
  var fraseFinalRetornada = "";
  for (let a in str) {
    if (str[a] === " ") {
      fraseFinalRetornada += invertirPalabra(acumuladorDePalabras) + " ";
      acumuladorDePalabras = "";
    } //si la letra es igual a un espacio agraga a la salida la palabra acumulada invertida y borra la palabra acumulada para reutilizarla//
    else acumuladorDePalabras += str[a];
    if (parseInt(a, 10) === str.length- 1) {
      fraseFinalRetornada += invertirPalabra(acumuladorDePalabras)
    }
  }
  function invertirPalabra(txt) {
    return txt.split("").reverse().join("");
  }
  return fraseFinalRetornada;
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numString = numero.toString()
  if (numString === numString.split("").reverse().join("")) {
    return "Es capicua"
  } else return "No es capicua"
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var Limpiado = ""
  for (let a in cadena) {
    if (!(cadena[a] === "a" || cadena[a] === "b" || cadena[a] ==="c"))
    Limpiado += cadena[a]
  }
  return Limpiado;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort((a, b) => a.length - b.length)
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var arrayDeInterseccions= []
  arreglo1.forEach(function(elemento1){
  arreglo2.forEach(function(elemento2){
    if (elemento1===elemento2) arrayDeInterseccions.push(elemento1)
  })
 })
 if (arrayDeInterseccions.length>0) {
   return arrayDeInterseccions
  } else return []
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

