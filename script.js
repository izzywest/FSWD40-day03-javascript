function myFunction1() {
    var randnb = Math.floor((Math.random() * 25) - 5);

    document.getElementById("randomnb").innerHTML = randnb;

    if (randnb <= 10) {
    	var msg = "The weather is cold";
    	document.getElementById("message").innerHTML = msg;

    } else if (randnb >= 11) {
    	var msg = "The weather is moderate";
    	document.getElementById("message").innerHTML = msg;
    }
}

function myFunction2() {
	var numberHigh = Math.max(1, 7, 5, 9);
    document.getElementById("highest").innerHTML = numberHigh;
}