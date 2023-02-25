

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
		"quote": "The best way to predict the future is to invent it.",
		"author": "Alan Kay"
	},
	{
		"quote": "If you want to go fast, go alone. If you want to go far, go together.",
		"author": "African Proverb"
	},
	{
		"quote": "Don't let yesterday take up too much of today.",
		"author": "Will Rogers"
	},
	{
		"quote": "You can't build a reputation on what you are going to do.",
		"author": "Henry Ford"
	},
	{
		"quote": "Success is not how high you have climbed, but how you make a positive difference to the world.",
		"author": "Roy T. Bennett"
	},
	{
		"quote": "It is during our darkest moments that we must focus to see the light.",
		"author": "Aristotle"
	},
	{
		"quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
		"author": "Albert Schweitzer"
	},
	{
		"quote": "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.",
		"author": "Chantal Sutherland"
	},
	{
		"quote": "Happiness is not something ready-made. It comes from your own actions.",
		"author": "Dalai Lama XIV"
	},
	{
		"quote": "Success is stumbling from failure to failure with no loss of enthusiasm.",
		"author": "Winston S. Churchill"
	},
	{
		"quote": "The only way to do great work is to love what you do.",
		"author": "Steve Jobs"
	},
	{
		"quote": "The best revenge is massive success.",
		"author": "Frank Sinatra"
	},
	{
		"quote": "I attribute my success to this: I never gave or took any excuse.",
		"author": "Florence Nightingale"
	},
	{
		"quote": "We may encounter many defeats but we must not be defeated.",
		"author": "Maya Angelou"
	},
	{
		"quote": "The way to get started is to quit talking and begin doing.",
		"author": "Walt Disney"
	},
	{
		"quote": "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
		"author": "Joshua J. Marine"
	},
	{
		"quote": "You are never too old to set another goal or to dream a new dream.",
		"author": "C.S. Lewis"
	},
	{
		"quote": "I have learned over the years that when one's mind is made up, this diminishes fear.",
		"author": "Rosa Parks"
	},
	{
		"quote": "The only limit to our realization of tomorrow will be our doubts of today.",
		"author": "Franklin D. Roosevelt"
	},
	{
		"quote": "If you don't like something, change it. If you can't change it, change your attitude.",
		"author": "Maya Angelou"
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

