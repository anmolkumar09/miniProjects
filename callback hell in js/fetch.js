// console.log("Anmol");
/*
const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL).then((Response)=>{ 
    
    // response ki jaga ham kuch bhi likh sakte hai.abc ans etc.

    return Response.json();
}).then((data)=>{
    console.log(data);
})

// -> fetch  returns Promise.
*/

// Fetch()..

// syntax...
fetch().then((response)=>{
    // handle Respose..
}).catch((error)=>{
    // handle error Part..

})

//-> fetch return Promise..

// getRequest..

// fetch('https://api.github.com/users')
// .then(res => console.log(res.json))
// .then(data => console.log(data)).catch(error => console.log(error));


// postrequest

// let data = {
//     name: 'anmol',
//     id: 456,
//     wight: '90kg'

    
// }
// const opt = {
//     method: 'post',

//     body: JSON.stringify(data),
//     header:{
//         'content-type': 'application/json'
//     }
// }

// fetch('https://reqres.in/api/users',opt)
// .then(res=> res.json()).
// then(res => console.log(res));

function getdata(){
    console.log('started getData');

    url='https://reqres.in/api/users;';

    fetch(url).then((response)=>{
        console.log('inside first then');
        return response.json();
    }).then((data)=>{
        console.log('inside second then');
        console.log(data);
    })
}
const text = document.getElementById("text");
const btn = document.querySelector("button");
btn.addEventListener('click',()=>{
    text.textContent = getdata();

});
