// Temperature
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


// Highest value in an array
function myFunction2() {
    var numberHigh = Math.max(1, 7, 5, 9);
    document.getElementById("highest").innerHTML = numberHigh;
}


// Product
var ar1 = [1, 3, 7, 10, 2];

var result = ar1.reduce(function(a, b) {
    return a * b;
});

document.getElementById("prod").innerHTML = result;

// Upper Case
function caseUpper(str) {
    str = "perfect problem solver";
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}

    document.getElementById("upper").innerHTML = caseUpper();