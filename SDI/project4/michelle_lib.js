/* 

Michele M. Pessoa
25 January 20112
Deliverable 4
Theme: Building a code library. 

*/


var michelleLib = function () {
	// private methods


	//Function to validate email address.
	//Modified code from http://www.zparacha.com/validate-email-address-using-javascript-regular-expression/
	var checkEmail =  function validateEmail(elementValue){
   		var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   //The regular expression above checks to see if the email address starts with alpha-numeric characters.
   //The email address may contain periods, underscores and hyphens.
   //There must be an @ symbol. There must also be a period before the top level domain, which can have 2-4 letters.
   return emailPattern.test(elementValue);
 };




	//This function checks to see if a URL is valid, i.e. starts with "http" or "https".
	// Modified code from http://snippets.dzone.com/posts/show/452.
	var checkURL = function (suspectedURL) {
		var regexp = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
	//The regular expression above checks to see if the suspected URL starts with http or https or www.
	return regexp.test(suspectedURL);
};




	// This function capitalizes the first letter of each word in a string.
	// Modified code from http://www.codeproject.com/Articles/11009/Proper-Case-JavaScript-Function
	var titleCase = function (aPhrase){
  		return aPhrase.toLowerCase().replace(/^(.)|\s(.)/g, //The regular expression looks for a space then capitalizes the next character.
          function($1) { return $1.toUpperCase(); });
};




	// This function rounds a number up or down to the specified number of decimal places 
	// Modified code from http://www.mredkj.com/javascript/nfbasic2.html
	var formatDecimals = function (aNumber, decimalPlaces) {
		var num = aNumber;
		return num.toFixed(decimalPlaces); 
};




	// This function calculates the days elapsed between two dates.
	//Modified code from http://blogs.digitss.com/javascript/calculate-datetime-difference-simple-javascript-code-snippet/
	var calculateDays = function daysBetween(earlierDate,laterDate){
    var totalDays = laterDate.getTime() - earlierDate.getTime();
    var elapsedTime = new Object();
 
       elapsedTime.days = Math.floor(totalDays/1000/60/60/24);
	   	//Rounding down and dividing by the number of miliseconds in a day.

       totalDays -= elapsedTime.days*1000*60*60*24;
 
       return elapsedTime;
 
};




	// This function takes a string number and makes it a true number.
	var convertToNumber = function (aStringNumber) {
	return (aStringNumber - 0); //Subtracting zero converts the string to a number.
};





	//public methods & properties
	return {
		"checkEmail" : checkEmail,
		"checkURL" : checkURL,
		"titleCase" : titleCase,
		"formatDecimals" : formatDecimals,
		"calculateDays" : calculateDays,
		"convertToNumber" : convertToNumber
	};
};