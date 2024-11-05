import "./styles.css";

import { Weather } from "./weather";

const location_name = "London";
//best practices are for the key not to be in frontend, but is free key with limited uses
const visual_crossing_api_key = '25HD5UH4UEA3U9AQGBRZQ2SEG';

const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+ location_name +'?key=' +visual_crossing_api_key;

async function fetchWeatherData(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        const weather_location = data.address;
        const weather_description = data.description;
        const weather_temp = data.currentConditions.temp;
        const weather_precip = data.currentConditions.precip;
        
        console.log(data);

        return new Weather(weather_location,weather_temp,weather_precipm,description);
    } catch(error){
        console.log(error);
    }

}

function main(){
    fetchLocationData();
}

main();