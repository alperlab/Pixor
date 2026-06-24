function initPixor(){

console.log("PIXOR ENGINE V1.2");

if(typeof widgets !== "undefined"){

console.log("Widgets Loaded");

widgets.forEach(widget=>{

console.log(
widget.id,
widget.type
);

});

}

}

document.addEventListener(
"DOMContentLoaded",
initPixor
);
function loadSettings(){

const saved =
localStorage.getItem("pixorSettings");

if(saved){

Object.assign(
pixorSettings,
JSON.parse(saved)
);

}

}

function saveSettings(){

localStorage.setItem(
"pixorSettings",
JSON.stringify(pixorSettings)
);

}

loadSettings();
// =====================
// PIXOR LIVE WEATHER
// =====================

async function loadWeather(){

try{

const response = await fetch(
"https://api.open-meteo.com/v1/forecast?latitude=41.01&longitude=28.97&current=temperature_2m"
);

const data = await response.json();

const temp =
Math.round(
data.current.temperature_2m
);

const weatherBox =
document.getElementById("weatherTemp");

if(weatherBox){

weatherBox.innerHTML =
temp + "°C";

}

}catch(error){

console.log(
"Weather Error",
error
);

}

}

loadWeather();

setInterval(
loadWeather,
300000
);
console.log("WEATHER START");

loadWeather();
