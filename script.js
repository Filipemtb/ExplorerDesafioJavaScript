let userName = prompt('Qual o seu nome ?')

alert(`${userName}, iremos fazer alguns calculos, coloque dois números`)

let firstNumber = prompt('Type the first number')
let secondNumber = prompt('Type the second number')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert(`${userName}, a soma destes dois números é: ${sum}`)
alert(`${userName}, a subtração destes números é: ${sub}`)
alert(`${userName}, a multiplicação destes números é: ${multi}`)
alert(`${userName}, a divisão destes números é: ${div}`)
alert(`${userName}, o resto da divisão destes números é: ${restDiv}`)

if ((firstNumber + secondNumber) % 2 == 0) {
  alert(`A soma dos números é par : ${sum}`)
} else {
  alert(`A soma dos números é ímpar ${sum}`)
}
