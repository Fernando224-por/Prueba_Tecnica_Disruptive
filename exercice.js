let listOne = [5, 2, 7, 9, 10, 4, 3]
let listTwo = [24, 18, 36, 8, 12, 20]
let listThree =[21, 7, 39, 45, 3, 27 ]
let emptyList = []

const resultOne = sortNumbers(listOne)
const resultTwo = sortNumbers(listTwo)
const resultTree = sortNumbers(listThree)
const resultEmptyList = sortNumbers(emptyList)

console.log(resultOne)
console.log(resultTwo)
console.log(resultTree)
console.log(resultEmptyList)

function sortNumbers(numberList) {

  // verificar si la lista esta vacia
  if (numberList.length === 0 || numberList === undefined) {
    return []
  } 
  else {
    //filtrar numeros Par o impar
    let par = numberList.filter(index => index % 2 === 0)
    let impar = numberList.filter(index => index % 2 !== 0)

    // verifica si solo hay numeros impares
    if (par.length === 0) {
      //Clasificar numeros en orden ascendente.
      impar.sort(compareNumbers)
      return(impar)
    }

    // valida si solo hay numeros pares
    if (impar.length === 0) {
      //Clasificar numeros en orden ascendente.
      par.sort(compareNumbers)
      return par
    }
    //Clasificar numeros en orden ascendente.
    par.sort(compareNumbers)
    impar.sort(compareNumbers)

    // retornar la lista de forma ordenada
    return par.concat(impar);
  }
}

// funcion para ordenar los numeros en orden acendente
function compareNumbers(a, b) {
  return a - b;
}
