/* 

Michele M. Pessoa
13 January 20112
Deliverable 2
Theme: Buying a puppy. 

*/


//Setting up some string arrays.

var dogBreeds = ["Dachshund", "Bassett Hound", "French Bulldog", "Miniature Schnauzer", "Pembroke Welsh Corgi"];
var congenitalDefects = ["thyroid disease", "chronic ear infections", "heatstroke", "renal dysplasia", "disk disease"];
var designerDogs = ["Puggle", "Jug", "Mini Hippo", "Ori-Pei"]
var petStores = ["Puppy City", "Canine Coral Kennels", "Shake-a-Paw", "CitiPups"]


//This is a number function returning the product of an argument times 7

function calculateDogYears(aNumber)    {
      return aNumber*7;
    }
//console.log("This breed\'s life expectancy in dog years is "  + calculateDogYears(10) + ".");



//This function displays text without typing "console.log" each time. Is this actually a procedure?
var say = function (message){
	console.log(message);
};


//Start telling the story.
say("My " + dogBreeds[2] + " recently passed away from cancer. It was especially sad, since he was only 8 years-old, or " + calculateDogYears(8) + " dog years.");

var lifeSpan = [15, 12];

say("My previous two dogs were a " + dogBreeds[0] + " and a " + dogBreeds[1] + ".");


//This function takes in a number array and calculates the average

Array.prototype.sum = function() {
for (var i = 0, L = this.length, sum = 0; i < L; sum += this[i++]);
return sum;
}

var lifeSpan = [15, 12];


//Continue story

say(  "They lived an average of " +  (  (lifeSpan.sum())/lifeSpan.length ) + " years." );


for (var i = 0, j=lifeSpan.length; i < j; i++) {
                   var  sumOfAges = sumOfAges + lifeSpan [ i ];
if (i>=j)
                        console.log ("The average lifespan of my two previous dogs was " + (sumOfAges / j) + "years.");
}

say("I\'m looking for a new puppy, but the choices are overwhelming.");
say("I like the following purebred dogs, but each breed is susceptible to some serious congenital defects: ");

//This "for loop" matches the breeds with their congenital defects.
for (var i=0, j=dogBreeds.length;  i<j; i++) { 
	console.log(dogBreeds[i] + "s: " + congenitalDefects[i]);
};

//Continue telling the story.
say("So far I\'ve visited " + petStores.length + " stores in an effort to find a puppy. My budget is $2,000. I want a small or medium sized female puppy. I know that I don\'t want a Boston Terrier. I would prefer one of the previously mentioned purebred ddogs.");
say("However, at " + petStores[2] + " I was introduced to some very cute crossbred dogs that I hadn\'t previously considered:");

var i=0;
while (i<designerDogs.length) //This loop lists the Designer Dogs.
{ 

	console.log(designerDogs[i] + "s");
	 i++;
};


//This string function concatenates a prefix and a suffix to create a "Designer Dog" name.

var designerDogName = function (prefix, suffix) {
	//console.log(prefix+suffix);
	return (prefix+suffix);
};

//Continue telling the story.

console.log ("Many crossbred, or \"Designer Dogs\" derive their unique names by splicing the names of its sire\'s and dam\'s breeds together. For example, a Shih Tzu and Poodle mix is called a " + designerDogName("Shi", "Poo") + ".");


//A Boolean function.

var checkGender = function (dogGender, dogSize) {
	if ((dogGender == "female") && (dogSize == "small") || (dogSize == "medium")){
		console.log("I can buy this puppy. It matches my wishlist for gender and size.");

		}
	else
		console.log("I won\'t buy this puppy. I would really prefer a small female puppy.");
};

//checkGender("female", "small");


//A procedure that checks life expectancy

var checkLifeExpectancy = function (lifeExpectancy) {
	if (lifeExpectancy <= 9){
		console.log("This breed\'s life expectancy is too short.");

		}
	else
		console.log("This breed fits my criteria for life expectancy.");
};

//checkLifeExpectancy(8);


//This function takes in the criteria for the puppy and checks to see if there is a match.
var purchasePuppy = function(puppyPrice, female, lowMaintenance, breedName, puppySize){
	var myBudget= 2000;
	if (puppyPrice <= myBudget && female == true && lowMaintenance == true && breedName != "Boston Terrier" && puppySize == ("small") || puppySize == ("medium")){
		console.log("I can buy this puppy. It matches my wishlist for price, gender, size and coat.");

	}
else
	//	if (puppyPrice <= myBudget);
		console.log("I shouldn\'t buy this puppy. It doesn\'t fit my criteria for one or more of the following: price, breed, gender, size, or coat.");
		//return;
};

say("About a week after visiting the stores I received an email from " + petStores[3] + " with some information about puppies on sale:")

say("Boston Terriers are on sale for $650. They have a low-maintenace coat and their adult size is small. They have one female left from the litter. Should I buy this dog?");


purchasePuppy(650, true, true, "Boston Terrier", "small");


say("Jugs, a Jack Russell and Pug mix, are on sale for $900. They have a low-maintenace coat and their adult size is small. They have three females and one male from the litter. Should I buy this dog?");


purchasePuppy(900, true, true, "Jug", "small");


say("Mini Hippos, a Shar-Pei and Beagle mix, are on sale for $1,200. They have a low-maintenace coat and their adult size is medium. They have one male left from the litter. Should I buy this dog?");


purchasePuppy(1200, false, true, "Mini Hippo", "medium");


say("Finally, Ori-Peis, a Shar-Pei and Pug mix, are on sale for $1,600. They have a harsh coat that sheds and their adult size is medium. They have two females available. Should I buy this dog?");


purchasePuppy(1600, true, false, "Ori-Pei", "medium");


say("In the end, I really fell in love with the Mini Hippo puppy. I think I\'ll hold out and wait for a female to become available.");