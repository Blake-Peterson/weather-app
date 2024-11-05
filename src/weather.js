export {Weather}

class Weather{
    constructor(location, temp_celsius,precipitation){
        this.location = location;
        this.temp_celsius  = temp_celsius;
        this. precipitation = precipitation;
    }

    get location(){
        return this.location;
    }

    get temp_fahrenheit(){
        return (this.temp_celsius * 9/5)+32;
    }

    get temp_celsius(){
        return this.temp_celsius;
    }
    

}

