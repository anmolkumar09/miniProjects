// console.log("Anmol")
const h1 = document.querySelector(".hours");
const min = document.querySelector(".minutes");
const sec = document.querySelector(".seconds");
const days = document.querySelector(".ExactDate");
const currDay = document.querySelector(".currDay");


function getTime()
{
    let d = new Date();
    let currDays = d.getDate();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    let day = d.toLocaleString('default',{weekday:'long',month:'short',year:'numeric'});

    h1.innerHTML = hours;
    min.innerHTML = `: ${minutes}`;
    sec.innerHTML = `: ${seconds}`;
    currDay.innerHTML = `${currDays},`
    days.innerHTML = `${day}`
}

console.log(setInterval(getTime,1000));
