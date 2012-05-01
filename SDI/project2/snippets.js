/*

//This is a while loop
var i=0;while (i<=5)
  {
  console.log("The number is " + i);
  i++;
  }


//This is a for loop

var i=0;for (i=0;i<=5;i++)
{
console.log("The number is " + i);
}


//A string array

var dogPrefix = ["Cava", "Cock", "Pom", "Chi"];
var dogSuffix = ["Chon", "Alier", "aPoo", "Doodle"];

console.log(dogPrefix);
console.log(dogSuffix);




//Setting up some string arrays.

var dogBreeds = ["Dachshund", "Bassett Hound", "French Bulldog", "Miniature Schnauzer", "Pembroke Welsh Corgi", "Miniature Pinscher", "Chinese Shar-Pei", "Beagle", "Pug"];
var congenitalDefects = ["thyroid disease", "chronic ear infections", "heatstroke", "renal dysplasia", "disk disease", "luxating patella", "demodectic mange", "glaucoma", "eye lacerations"];



//This loop matches the breeds with their congenital defects.
for (var i=0;  i<dogBreeds.length; i++) { 
	console.log(dogBreeds[i] + "s: " + congenitalDefects[i]);
};



//A number function returning a value

function calculateDogYears(aNumber)    {
      return aNumber*7;
    }
	
console.log("This breed\'s life expectancy in dog years is " + calculateDogYears(10) + ".");




//This function displays text without typing "console.log" each time.
var say = function (message){
	console.log(message);
};



//This function concatenates a prefix and a suffix to create a new "Designer Dog" name.

var designerDogName = function (prefix, suffix) {
	//console.log(prefix+suffix);
	return (prefix+suffix);
};

console.log ("Many crossbred dogs derive their unique names by splicing the names of its sire\'s and dam\'s breeds together. For example, a Shih Tzu and Poodle mix is called a " + designerDogName("Shi", "Poo"));




//A Boolean function.

var checkGender = function (dogGender, dogSize) {
	if (dogGender == "female" && dogSize == "small"){
		console.log("I can buy this puppy. It matches my wishlist for gender and size.");

		}
	else
		console.log("I won\'t buy this puppy. I would really prefer a small female puppy.");
};


checkGender("female", "small");





*/



//This function displays text without typing "console.log" each time. Is this actually a procedure?
var say = function (message){
	console.log(message);
};



//This function takes in a number array and calculates the average

Array.prototype.sum = function() {
for (var i = 0, L = this.length, sum = 0; i < L; sum += this[i++]);
return sum;
}

var lifeSpan = [15, 12];



//Continue story

say(  "My previous two dogs lived an average of " +  (  (lifeSpan.sum())/lifeSpan.length ) + " years." );


for (var i = 0, j=lifeSpan.length; i < j; i++) {
                   var  sumOfAges = sumOfAges + lifeSpan [ i ];
if (i>=j)
                        console.log ("The average lifespan of my two previous dogs was " + (sumOfAges / j) + "years.");
}


var someArray = function (someNumber, anArray) {
var i=0;
for (i=0;i<=anArray.length;i++);
{
console.log("The number is " + i);
}	
}