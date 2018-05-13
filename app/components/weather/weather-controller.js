function WeatherController(){
	var weatherService = new WeatherService();

	function drawWeather(weather){
		var getTemp = weather.main.temp;
		var temp = Math.floor(getTemp * 9/5 - 459.67);
		var template =  `
			<h1>Your temperature is ${temp}°</h1>
			`
		
		document.getElementById('weather').innerHTML = template
	
	}
	function getWeather(){
	weatherService.getWeather(drawWeather)
	
	}
	getWeather()
}