/* 

Michele M. Pessoa
25 January 20112
Deliverable 4
Theme: Building a code library. 

*/


var lib = michelleLib();



console.log (lib.checkEmail("%@b.tv"));

console.log (lib.checkURL("http://www.aol.com"));

console.log (lib.titleCase("javascript and more."));

console.log (lib.formatDecimals(700.13659, 2));

// calculateDays Function example
function showDays()
{
	lastChristmas = new Date(2011, 11, 25, 0, 0, 0);
	dateCurrent = new Date(2012, 1, 25, 0, 0, 0);
	elapsedTime = lib.calculateDays(lastChristmas, dateCurrent);
	console.log("There are " + elapsedTime.days + " days between Christmas and my birthday on February 25.");
}
showDays();


console.log(lib.convertToNumber("42"));