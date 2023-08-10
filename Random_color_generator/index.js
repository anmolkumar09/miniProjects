// // console.log('anmol')

// const btn = document.querySelector("button");
// console.log(btn);

// const body = document.body;
// // console.log(mainBody);

// const color = document.querySelector(".color");


// function randomnum(){
//     console.log(Math.floor(Math.random()*256));

// }

// function generateNum(){
//     let red = Math.floor(Math.random()*256);
//     let green = Math.floor(Math.random()*256);
//     let blue = Math.floor(Math.random()*256);

//     const getColor = `${red},${green},${blue}`;
//     return getColor;
// }


// btn.addEventListener("click",()=>{
//     const randomColor = generateNum();

//     body.style.backgroundColor = randomColor;
//     color.textContent = randomColor;
//     // console.log(randomColor);
   
// });



const btn = document.querySelector("button");
console.log(btn);

const body = document.body;

const colortxt = document.querySelector(".container h1");

function colorChange(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    const getColor = `rgb(${red},${green},${blue})`;
    return getColor;

}

btn.addEventListener("click",()=>{
    let randomColor = colorChange();
    // console.log(randomColor);
    colortxt.textContent = randomColor;
    body.style.backgroundColor = randomColor;
})
