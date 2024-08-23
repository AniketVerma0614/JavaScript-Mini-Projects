let gameSeq = [];
let userSeq = [];

let btns =["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 =document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (!started) {  // Alternative shorthand for checking if started is false
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function btnFlash(btns){
    btns.classList.add("flash");
    setTimeout(function(){
        btns.classList.remove("flash");
    },250);
}

function gameFlash(btns){
    btns.classList.add("userflash");
    setTimeout(function(){
        btns.classList.remove("userflash");
    },250);
}



function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    
    let randIdx = Math.floor(Math.random() *4);
    let randomColor = btns[randIdx];
    let randBtn =document.querySelector(`.${randomColor}`);
    //random btn choose
    if(randBtn){
    console.log(randIdx);
    console.log(randomColor);
    console.log(randBtn);
    btnFlash(randBtn);
    }
}

function btnPress(){
    console.log(this);
    let btn = this;
    gameFlash(btn);
}

let allBtns = document.querySelectorAll(".btn");

for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
}