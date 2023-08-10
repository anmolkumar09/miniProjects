const special_date = "01 jan 2023";

const daysEL =   document.getElementById("days");
const hoursEL =  document.getElementById("hours");
const minutesEL = document.getElementById("minutes"); 
const secondsEL = document.getElementById("seconds"); 

function countdown()
{

    const date1 = new Date(special_date);

    const currdate = new Date();

    const totalseconds = (date1 - currdate)/1000; // converting ms into  seconds matlab meri special date 30 june se 15 Aug 2022 .
    
    const Days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600)%24; // it will give hours
    const minute = Math.floor(totalseconds/60)%60;
    const seconds = Math.floor(totalseconds)%60;
   
    // console.log(Days,hours,minute ,seconds);

    daysEL.innerHTML = Days;
    hoursEL.innerHTML = hours;
    minutesEL.innerHTML = minute;
    secondsEL.innerHTML = seconds
}
countdown();


setInterval(countdown,1000);

//------------Below Code for changing Mode in webpage--------------//

const btn = document.querySelector("button");

function darkMode(){

    let setTheme = document.body;
    setTheme.classList.toggle("dark-mode");

    var theme;

    if(setTheme.classList.contains("dark-mode")) //return true if token is present
    {
        console.log("Dark Mode");
        theme = "DARK";
    }
    else
    {
        console.log("Light Mode");
        theme = "LIGHT";
    }

    // now we have to  save in local storage.
    // this is important step!!
    localStorage.setItem("PageTheme",JSON.stringify(theme));
    // here i  create  pageTheme to store data then after that i  get my data by simpliy
}

btn.addEventListener("click",darkMode);

setInterval(()=>{
    let getTheme = JSON.parse(localStorage.getItem("PageTheme"));

    console.log(getTheme);

    if(getTheme === "DARK")
    {
        document.body.classList = "dark-mode";
    }
    else
    {
        document.body.classList = "";
    }
},5);