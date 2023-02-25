

$(document).ready(function() {
	
	var quotes = [
		{
			"quote": "Be the change you wish to see in the world.",
			"author": "Mahatma Gandhi"
		},
		{
			"quote": "You miss 100% of the shots you don’t take.",
			"author": "Wayne Gretzky"
		},
		{
			"quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
			"author": "Winston Churchill"
		},
		{
			"quote": "Believe you can and you're halfway there.",
			"author": "Theodore Roosevelt"
		},
		{
			"quote": "Strive not to be a success, but rather to be of value.",
			"author": "Albert Einstein"
		},
		{
			"quote": "I have not failed. I've just found 10,000 ways that won't work.",
			"author": "Thomas Edison"
		},
		{
			"quote": "It does not matter how slowly you go as long as you do not stop.",
			"author": "Confucius"
		},
		{
			"quote": "The only way to do great work is to love what you do.",
			"author": "Steve Jobs"
		},
		{
			"quote": "Happiness is not something ready made. It comes from your own actions.",
			"author": "Dalai Lama"
		},
		{
			"quote": "In three words I can sum up everything I've learned about life: it goes on.",
			"author": "Robert Frost"
		}
	];
	
	function getRandomQuote() {
		var randomIndex = Math.floor(Math.random() * quotes.length);
		return quotes[randomIndex];
	}
	
	function generateQuote() {
		var randomQuote = getRandomQuote();
		$("#quote").text(randomQuote.quote);
		$("#author").text("- " + randomQuote.author);
	
// generate two random colors
  var color1 = Math.floor(Math.random() * 16777216).toString(16);
  var color2 = Math.floor(Math.random() * 16777216).toString(16);
  
  // create the radial gradient background CSS
  var gradient = "radial-gradient(circle at center, #" + color1 + ", #" + color2 + ")";
  
  // set the gradient background and border color
  $("body").css("background-image", gradient);
  $(".inner-container").css("border-color", "#" + color1);
 
  
}
	generateQuote();
	
	$("#new-quote").on("click", function() {
		generateQuote();
	});
	
});

