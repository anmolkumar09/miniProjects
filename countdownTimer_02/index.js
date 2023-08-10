let special_date = "01 jan 2023";

const daysEl = document.getElementById("days");
const minuteEl = document.getElementById("minute");
const hoursEL = document.getElementById("hours");
const secondEl = document.getElementById("second");

function countdown()
{
    const date1 = new Date(special_date);
    const current_date = new Date();


    const totalSeconds = (date1-current_date)/1000;

    const Days = Math.floor(totalSeconds/3600/24);
    const Hours = Math.floor(totalSeconds/3600)%24;
    const Minute = Math.floor(totalSeconds/60)%60;
    const Second = Math.floor(totalSeconds)%60;

   daysEl.innerHTML = Days;
   hoursEL.innerHTML = Hours;
   minuteEl.innerHTML = Minute;
   secondEl.innerHTML = Second;
}
// countdown();
setInterval(countdown,1000);




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