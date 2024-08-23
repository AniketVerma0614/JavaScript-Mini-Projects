let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

document.addEventListener("keypress", function() {
    if (!started) {  // Alternative shorthand for checking if started is false
        console.log("game is started");
        started = true;
    }
});
