setInterval(setclock,1000);

function setclock()
{
    const currDate = new Date();
    const secondratio = currDate.getSeconds()/60;
    const minuteratio = (secondratio + currDate.getMinutes())/60;

    const hourratio = (minuteratio + currDate.getHours())/12;

    setRotation(Secondhand,secondratio);
    setRotation(Minutehand,minuteratio);
    setRotation(Hourhand,hourratio);
}

function setRotation(element,rotationRatio)
{
    element.style.setProperty('--rotation',rotationRatio*360);
}

const  Hourhand = document.querySelector('[data-Hour-hand]');
const  Minutehand = document.querySelector('[data-Minute-hand]');
const  Secondhand = document.querySelector('[data-Second-hand]');
setclock();