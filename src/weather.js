export {Weather}

class Weather{
    constructor(location, temp_celsius,precipitation,description){
        this.location = location;
        this.temp_celsius  = temp_celsius;
        this. precipitation = precipitation;
        this.description = description;

    }

    get getLocation(){
        return this.location;
    }

    set setLocation(new_location){
        return this.location = new_location;
    }

    get getTemp_fahrenheit(){
        return (this.temp_celsius * 9/5)+32;
    }

    get getTemp_celsius(){
        return this.temp_celsius;
    }

    get getWeatherDescription(){
        return this.description;
    }

    set changeWeatherDescription(new_descript){
        return this.description = new_descript;
    }

}

