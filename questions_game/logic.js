let time = document.getElementById("time");
let audioGameOver = document.getElementById("gameOver");
let number = 0;
let interval;

function start(){   
    alert("You are about to start a 5 questions game!" + "\n" +
        "You have 30 seconds to complete the 5 questions!, good luck!");
    interval = setInterval(ticTac,1000)
}

function ticTac(){    
    timeOut();    
    if (number <= 30){
        time.textContent = String(number).padStart(2, 0);
        number = number + 1;  
    }
}

function timeOut(){
   number >= 31 ? end(): number;
}

function end(){
    clearInterval(interval);
    audioGameOver.play();
    alert("Game over");
}

function restart(){
    clearInterval(interval);
    number = 0;
    location.reload();
}

function complete(){
    clearInterval(interval);
    number = 0;
    let question1 = document.getElementById("question1")
    let question2 = document.getElementById("question2")
    let question3 = document.getElementById("question3")
    let question4 = document.getElementById("question4")
    let question5 = document.getElementById("question5")

    let message = "Congratulation!, you have finished in time, and your answers are:"
    
    alert(message+"\n"+
        "Answer 1: " + question1.value + "\n" +
        "Answer  2: " + question2.value + "\n" +
        "Answer  3: " + question3.value + "\n" +
        "Answer  4: " + question4.value + "\n" +
        "Answer  5: " + question5.value);
}