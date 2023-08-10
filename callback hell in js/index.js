console.log("anmol");

// callBack Hell:

//Q)  muhe ye karna h ki phele heading ka text or color change karna h or saath me hi second heading ka text and color change karna h...

// Text       Delay         Color
// one          1s           orange
// two           2s          purple
// three         2s          red
// four         1s           pink
// five         2s            green
// six          3s           blue 
// seven        1s           brown.


// ye ha shai tarika...
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");



/*
    setTimeout(()=>{
        heading1.textContent = "One";
        heading1.style.color = "orange";
    
        setTimeout(()=>{
            heading2.textContent = "Two";
            heading2.style.color = "purple";
    
            setTimeout(()=>{
                heading3.textContent = "Three";
                heading3.style.color = "red";
    
                setTimeout(()=>{
                    heading4.textContent = "Four";
                    heading4.style.color = "pink";

                    setTimeout(()=>{
                        heading5.textContent = "Five";
                        heading5.style.color = "green";

                        setTimeout(()=>{
                            heading6.textContent = "Six";
                            heading6.style.color = "blue";

                            setTimeout(() => {
                                heading7.textContent = "Seven";
                                heading7.style.color = "brown";
    
                            }, 1000);
                        },3000);
                    },2000);
                },1000);
            },2000);
        },2000);
    },1000);
*/
// i will use function for above code.

function changeColor(element,text,color,time,bg){
    setTimeout(()=>{
        element.textContent = text;
        element.style.color = color;
        element.style.backgroundColor = bg;
    },time)
}
changeColor(heading1,"one","red",1000,"yellow");
changeColor(heading2,"one","red",2000);
changeColor(heading3,"one","red",3000);
changeColor(heading4,"one","red",4000);
changeColor(heading5,"one","red",5000);
changeColor(heading6,"one","red",6000);
changeColor(heading7,"one","red",7000);
// console.log("End"00);
setTimeout(()=>{
    console.log("End");
},8000)