function QuoteController(){

	var qs = new QuoteService();

	function drawQuote(quote){
		var template = `
		<h3>${quote.quote}</h3>
		<hr>
		<h5>${quote.author}</h5>
		`;	
		document.getElementById('quote').innerHTML = template
	}
	

	qs.getQuote(function(quote){
		qs.getQuote(drawQuote)

	})



}
