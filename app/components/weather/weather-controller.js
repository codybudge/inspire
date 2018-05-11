function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();

	function drawWeather(weather){
		var getTemp = weather.main.temp;
		var temp =Math.floor(getTemp * 9/5 - 459.67);
		var template =  `
			<h1>Your temperature is ${temp}F</h1>
			`
		
		document.getElementById('weather').innerHTML = template
	
	}
	function getWeather(){
	weatherService.getWeather(drawWeather)
		console.log(weather);
		//What can you do with this weather object?
	}
	getWeather()
}