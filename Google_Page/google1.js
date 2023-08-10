// Events:

//This is a best way!!
// const firstbtn = document.querySelector(".firstbtn");
// firstbtn.addEventListener("click",()=>{
//     console.log('Anmol you click on me!!!');
// });

// const secondbtn = document.querySelector(".secondbtn");

// secondbtn.addEventListener("click",()=>{
//     console.log("second button");
// });

// creating Fat Arrow function:

// const secondbtn = document.querySelector(".secondbtn");
// let func1 = () => {console.log("Anmol")};
// secondbtn.addEventListener("click",func1);


// Imp!!! Click on Multiple button

 const btn = document.querySelectorAll(".btn button");

 //using for of loop 

for (const button of btn) {
    button.addEventListener("click",function(){
        console.log(button.textContent);
    })
}

// by using foreach loop:
// btn.forEach(button => {
//     button.addEventListener("click",function(){
//         console.log(button.textContent);
//     })
// });

// Question mai chata hu ki jab koi se button pe click karu to button ka color change hoajaye or saath me text bhi console pe print hojaye?

// Ans  btn.forEach(button => {
//     // console.log(button.textContent);
//     button.addEventListener("click",function(){
//         // console.log(e.target);
//         // e.target.style.backgroundColor="red";

//         // Both are Good way
//         button.style.color="red";
//         console.log(button.textContent);
        
//     })
// });

// Mouse Over Event:

const btn2 = document.querySelector(".btn");
btn2.addEventListener("mouseover",()=>{
    console.log('Mouse Over');
})

//  Mouse Leave Event:
btn2.addEventListener("mouseleave",()=>{
    console.log("MouseLeave")
})

//Keyboard event:
let body = document.body;
body.addEventListener("keypress",(x)=>{
    console.log(x.key);
    console.log("keypressd!!")
})