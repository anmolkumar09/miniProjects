
// Multiple Promise's...

let p1 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('resolved 1st Promise');
    }, 2000);
})
let p2 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('resolved 2nd Promise');
    }, 4000);

})

async function myfunc()
{
    try {
        // wait until the promise resolves 
        let result = await p1;

        console.log(result);
        // console.log('NM')
    }   
    catch(error) {
        console.log(error);
    }
    let result1 = await p2;

}

myfunc();


// let sum(2)(4)(5);

