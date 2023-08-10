// question ye hai ki ma button pe press karu to 
// mere ko answer send kare us sum ka nhi to 
// error message through kare..

let mypromise = new Promise((resolve,reject)=>{
    let x = 5+5;

    if(x===10)
    {
        resolve(`correct answer is ${x}`);

    }
    else
    {
        reject(`error! smotheing Wrong`);
    }
});

mypromise.then((msg)=>{
   
    let mainbtn = document.querySelector('.btn');
    let txt = document.querySelector('.txt');
    mainbtn.addEventListener('click',()=>{

        setTimeout(() => {
            txt.innerHTML= msg;
        }, 1000);

})
}).catch((error)=>{

    let mainbtn = document.querySelector('.btn');
    let txt = document.querySelector('.txt');
    mainbtn.addEventListener('click',()=>{
    txt.innerHTML= error;
    });
    
});


// -------------------------------//
 
const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
function promise2(element,txt,bgcolor,time)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element)
            {
                resolve();
                element.style.backgroundColor = bgcolor;
                element.style.color = txt;
            } 
            else
            {
                reject();
            }
        },time);
    })
}



// consuming part..
let btn2 = document.querySelector('.btn2');
btn2.addEventListener("click",()=>{
    promise2(heading1,"green","black",500).then(()=>{
        return promise2(heading2,"blue","red",1000).then(()=>{
            return promise2(heading3,"yellow","red",1000);
        })
    })
    
})

let ar = [45,78,9,6,8,100];

let p1 = new Promise((resolve,reject)=>{
    if(ar.includes(78) && ar.includes(100))
    {
        resolve(`true`);
    }
    else
    {
        reject(`false`);
    }
});
p1.then((msg)=>{
    console.log(msg);
}).catch((error)=>{
    console.log(error);
})


// Call Back Hell..
const h1 = document.querySelector(".h1");
const h2 = document.querySelector(".h2");
const h3 = document.querySelector(".h3");
const h4 = document.querySelector(".h4");
const h5 = document.querySelector(".h5");

console.log(h1);



