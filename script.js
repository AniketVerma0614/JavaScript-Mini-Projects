let btn= document.querySelector("button");
let ul = document.querySelector("ul");
let inp =document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn  =document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value ="";
});

// let delBtns = document.querySelectorAll(".delete");
// for (let delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }

ul.addEventListener("click",function(event){
    console.log(event.target);//event.target batata hai ==> ki ye event kiske wajah se target ho ra hai !!!//  KIsne usko trigger kiya hai ...
    if(event.target.nodeName =="BUTTON"){
        let ListItem = event.target.parentElement;
        ListItem.remove();
        console.log("deleted");
    }
    
});
