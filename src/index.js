import "./styles.css";

import { Weather } from "./weather";

const location_name = "London";
//best practices are for the key not to be in frontend, but is free key with limited uses
const visual_crossing_api_key = '25HD5UH4UEA3U9AQGBRZQ2SEG';

const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+ location_name +'?key=' +visual_crossing_api_key;

async function fetchLocationData(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.log(error);
    }
}

function main(){
    fetchLocationData();
}

main();