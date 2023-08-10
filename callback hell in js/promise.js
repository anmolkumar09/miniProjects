// console.log(`Promise's`);

// let ar = ['Rice','Vegetables','Salt','Coffee'];
// console.log(ar);

// //Syntax:
// let myPromise = new Promise((resole,reject)=>{
//     if(('Ricey')&&('Vegetables')&&('Salt'))
//     {
//         resole("Got It!!!");
//     }
//     else
//     {
//         reject('you dont have ingredients');
//     }
// })

// // consumer Part;
// myPromise.then(
//     (result) => { 
//        console.log("This is then msg",result);
//     },
//     (error) => { 
//        console.log("This is then msg",error);
//     }
//   );

/*
let myPromise = new Promise((resolve,reject)=>{
    let a = 12+12;

    if(a==='24')
    {
        resolve("success");
    }
    else{
        reject("Failed");
    }
});
// consumer part::
myPromise.then((msg)=>{
    console.log("This is in then " +msg);
}).catch((error)=>{
    console.log("this is in catch " +error);
});
*/

// Example 2:
/*let arr = ['anmol','manvi','game','game2'];
let myPromise1 = new Promise((resolve,reject)=>{
    if(arr.includes('anmol')&&arr.includes('manvi'))
    {
        resolve("yes, you got it!!");
    }
    else
    {
        reject("failed");
    }
});



// consumer part:

myPromise1.then((msg1)=>{
    console.log("this is "+msg1);
}).catch((error1)=>{
    console.log("this is "+error1);
});
*/



// -> How to create function Promise.
/*
console.log('script start');
function mypromise(){
    let arr = ['anmol','manvi','game','game2'];

    return new Promise((resolve,reject)=>{
        if(arr.includes('anmol')&&arr.includes('manvi'))
        {
            resolve('anmol');
        }
        else
        {
            reject('you Lose');
        }
    });
}


call karna h function ye aise karenge.
mypromise().then((msg)=>{console.log('yes! ',msg)}).catch((error)=>{console.log('Error ',error)});

for(let i=0;i<100;i++)
{
    console.log(i);
}*/

// Question: i want my promise after few second.
/*

function myPromise1(){
    let ar = [1,2,3,4,5,6,7];

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(ar.includes(42) && ar.includes(7))
            {
               resolve("yes it is present");
            }
            else
            {
                reject("No! it was Not");
            }
    
        },1000);
      });
};

myPromise1().then((msg)=>{
    console.log("you got it!!",msg);
}).catch((error)=>{
    console.log("No !!!",error)
})
*/

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// call back use na karke ab hame Promise ka use karna h...

// step 1: create function of promise.
function mypromise(element,text,bgcolor,colortxt,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                element.style.backgroundColor = bgcolor;
                element.textContent = text;
                element.style.color = colortxt;
                resolve();
            }
            else
            {
                reject();
            }
        },time);
    })
}

// consuming Part and we callback..
mypromise(heading1,"One","red","white",1000).then(()=>{
   return mypromise(heading2,"Two","pink","yellow",1000).
   then(()=>{
     return mypromise(heading3,"Three","green","",1000).then(()=>{
        return mypromise(heading4,"Four","brown","white",1000)
     })
   })
})

// AJAX : asynchronous javascript and XML

 // HTTP request
// it is a set of "web development techniques"

 //using many web technologies on the "client-side"
 // to create asynchronous web applications.
    // With Ajax, web applications can send and retrieve
    // data from a server asynchronously (in the background)
    // without interfering with the display and
    // behaviour of the existing page
 //
// We don't use data in XML format anymore.
//  we use JSON now.

//     we have 3 most common ways to create and send request to server
//  1.) xmlHTTPRequest (old way of doing)
//  2.) fetch API (new way of doing)


