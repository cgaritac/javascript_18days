function showResult(result){
    let data = document.getElementById("result")

    data.textContent = result
}

function add(){
    let number1 = document.getElementById("number1").value
    let number2 = document.getElementById("number2").value

    let result = +number1 + +number2

    showResult(result)
}

function subs(){
    let number1 = document.getElementById("number1").value
    let number2 = document.getElementById("number2").value

    let result = +number1 - +number2

    showResult(result)
}

function mult(){
    let number1 = document.getElementById("number1").value
    let number2 = document.getElementById("number2").value

    let result = +number1 * +number2

    showResult(result)
}

function div(){
    let number1 = document.getElementById("number1").value
    let number2 = document.getElementById("number2").value

    let result = +number1 / +number2

    showResult(result)
}

function pot(){
    let number1 = document.getElementById("number1").value
    let number2 = document.getElementById("number2").value

    let result = Math.pow(+number1, +number2)

    showResult(result)
}

function sqRoot(){
    let number2 = document.getElementById("number2").value

    let result = Math.sqrt(+number2)

    showResult(result)
}

function absol(){
    let number2 = document.getElementById("number2").value

    let result = Math.abs(+number2)

    showResult(result)
}

function ran(){
    let number1 = document.getElementById("number1").value
    let number2 = document.getElementById("number2").value

    let result = Math.random()*((+number2 + 1) - +number1) + +number1

    showResult(result)
}

function rou(){
    let number = document.getElementById("result").textContent

    let result = Math.round(+number)

    showResult(result)
}

function fl(){
    let number = document.getElementById("result").textContent

    let result = Math.floor(+number)

    showResult(result)
}

function ce(){
    let number = document.getElementById("result").textContent

    let result = Math.ceil(+number)

    showResult(result)
}

