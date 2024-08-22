let div = document.querySelector("div");  
let ul = document.querySelector("ul");  
let lis = document.querySelectorAll("li"); // Changed to querySelectorAll  

div.addEventListener("click", function() {  
    console.log("div was clicked");  
});   

ul.addEventListener("click", function() {  
    console.log("ul was clicked");  
});  

for (let li of lis) { // Add 'let' before 'li' for proper scoping  
    li.addEventListener("click", function() { // Fixed the typo  
        console.log("li was clicked !!!"); // Changed message for clarity  
    });  
}