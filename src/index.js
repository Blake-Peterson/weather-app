import "./styles.css";

import { Weather } from "./weather";


//const location_name = "London";
//best practices are for the key not to be in frontend, but is free key with limited uses
const visual_crossing_api_key = '25HD5UH4UEA3U9AQGBRZQ2SEG';

const header = document.querySelector("#header");
const content = document.querySelector("#content");

async function fetchWeatherData(location_name){
    let weather_location ="";
    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+ location_name +'?key=' +visual_crossing_api_key;
    try{
        const response = await fetch(url);
        const data = await response.json();
        const weather_address = data.address;
        const weather_description = data.description;
        const weather_temp = data.currentConditions.temp;
        const weather_precip = data.currentConditions.precip;      
        console.log(data);

        weather_location= new Weather(weather_address,weather_temp,weather_precip,weather_description);
    } catch(error){
        console.log(error);
    }
    console.log(typeof(weather_location));
    console.log(weather_location);
    return weather_location;
}

function displayWeatherContent(Weather){
    const div = document.createElement("div");
    for(let i=0;i<4;i++){
        const p = document.createElement("p");
        switch (i){
            case 1:
                p.textContent=  Weather.temp_celsius;
                break;
            case 2:
                p.textContent = Weather.precip;
                break;
            case 3:
                p.textContent = Weather.description;
                break;
            default:
                p.textContent=Weather.location;
        }
        div.appendChild(p);
    }
    console.log("return weather div");
    console.log(div);
    div;
}


function main(){
    const input = document.createElement("input");
    input.id="location_input";
    input.type="text";
    input.placeholder="Search Location for Weather";

    header.appendChild(input);

    const searchInput = document.querySelector("#location_input");
    searchInput.addEventListener('keypress',function (event){
        if(event.key ==='Enter'){
            console.log("enter key pressed");
            const location_name = searchInput.value;
            const weather = fetchWeatherData(location_name);
            console.log(typeof(weather));

            //TODO: weather is the correct instance of
            if (typeof(weather)=="object"){
                console.log("weather is an instance of Weather Object");
                const weather_div = displayWeatherContent(weather);
                content.appendChild(weather_div);
            } else{
    
            }
        }
    });    
}

main();