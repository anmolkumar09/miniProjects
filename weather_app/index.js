// defining variabe in javascript..


const cityDisplay = document.getElementById("cityDisplay");
const description = document.getElementById("description");

const temp = document.getElementById("temp");
const wind = document.getElementById("wind");
const btn = document.getElementById("btn");
const cityInput = document.getElementById("cityInput");


// here i paste api link..
apik = "3045dd712ffe6e702e3245525ac7fa38";

// function for conversion 1 kelvin to celsuis.
function conversion(value){
    return (value-273).toFixed(1); // is line ka matlab h ki toFixed(2)  ka matlab decimal ke baad kitni digit tak chaiya .

    // 1 kelvin  = -273 celsius..
}


//Now i have to get all information using fetch()..

btn.addEventListener('click',function(){

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityInput.value+'&appid='+apik).then(res => res.json())

    // Now you need to collect necessary information
    //with the api link. collect all information and store in the differernt constants..

    .then(data=>{
        var name = data['name'];
        var descrip = data['weather'][0]['description'];
        var temperature = data['main']['temp'];
        var windspd = data['wind']['speed'];
    
    
        cityInput.innerHTML = `weather of ${name}`;
        temp.innerHTML = `Temperature: ${ conversion( temperature) } celsius`;
        description.innerHTML = `Sky Condition: ${descrip}`;
        wind.innerHTML = `Wind Speed: ${windspd} km/h`;
    })
   


    // condition-> if you do not enter anything in the input box then alert will be pop..
    .catch((error)=>alert('you enter wrong name'));
})


