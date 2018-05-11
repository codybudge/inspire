function QuoteController(){

	var qs = new QuoteService();

	function drawQuote(quote){
		var template = `
		<h4>${quote.quote}</h4>
		<h5>${quote.author}</h5>
		`;	
		document.getElementById('quote').innerHTML = template
	}
	

	qs.getQuote(function(quote){
		qs.getQuote(drawQuote)

	})



}
