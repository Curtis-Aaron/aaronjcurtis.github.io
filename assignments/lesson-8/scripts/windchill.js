//function windChill (89,5) {
//var power = Math.pow(5,.16);	
//var chill = (35.74 + 0.6215 * 89 - 35.75 * power + .4275 * 89 * power).toFixed(2);
//document.getElementsByClassName("demo2").innerHTML = chill;
//}


function doInputOutput () {
console.log('Hello');
var temp = document.getElementById('hightemp').innerHTML;
console.log(temp);
var windSpeed = document.getElementById('windspeed').innerHTML;
console.log(windspeed);
console.log(temp + windSpeed + 'Hello');
var itsCold = windChill(temp,windSpeed);

document.getElementById ('demo2').innerHTML = itsCold;
//	div.innerHTML = itsCold;
}

function windChill (t,v) {

var a = Math.pow(v,.16);
var itFeelsLike = (35.74 + (0.6215 * t) - (35.75* a) + (.4275 * t) * a).toFixed(2);
//I got the formula from www.onlineconversion.com/windchill.htm.  
//I verified the formula from a few separate sources as well

console.log(itFeelsLike);
return itFeelsLike;

}
doInputOutput();