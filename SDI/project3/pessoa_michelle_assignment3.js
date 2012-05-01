/* 

Michele M. Pessoa
19 January 20112
Deliverable 3
Theme: Buying a puppy. 

*/


//Setting up some global string arrays.

var designerDogs = ["Puggle", "Jug", "Mini Hippo", "Ori-Pei"]
var petStores = ["Puppy City", "Canine Coral Kennels", "Shake-a-Paw", "CitiPups"]




//This procedure displays text without typing "console.log" each time.
var say = function (message){
	console.log(message);
};

//Start the story.

say("I\'ve had three wonderful dogs in my life:");




//This function pulls in data from the JSON file.
var handleData = function (jsonData){
	console.log(jsonData);
};





//This function pulls in data from the JSON file and describes each of my pet dogs.
var displayDogs = function (jsonData)	{
	for (var i=0; i<json.pets.length; i++) {
	var dog = json.pets[i];
	console.log( dog.name + ", my " + dog.breed + ", was very " + dog.description);
	};
};


displayDogs(json);


//This is a number function returning the product of an argument times 7 to calculate "dog years."

function calculateDogYears(aNumber)    {
      return aNumber*7;
    };
	
	
say("Beren recently passed away from cancer. It was especially sad, since he was only 8 years-old, or " + calculateDogYears(8) + " dog years.");



//This function takes in a number array and calculates the average

Array.prototype.sum = function() {
for (var i = 0, L = this.length, sum = 0; i < L; sum += this[i++]);
return sum;
}

var lifeSpan = [15, 12];

var ave = ( (lifeSpan.sum())/lifeSpan.length );


//Continue story

say(  "My previous two dogs, Cricket and Freya, lived an average of " +  (  ave ) + " years, or " + calculateDogYears(ave) + " dog years." );
say("I\'m looking for a new puppy, but the choices are overwhelming.");
say("I like the following purebred dogs, but each breed is susceptible to some serious congenital defects: ");


//This function matches the breeds with their congenital defects.

var displayDefects = function (json2Data)	{
	for (var i=0; i<json2.favoriteBreeds.length; i++) {
	var dog2 = json2.favoriteBreeds[i];
	//return( dog2.pureBreed +"s: " + dog2.congenitalDefects);
	console.log( dog2.pureBreed +"s: " + dog2.congenitalDefects);
	};
};

displayDefects(json2);





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


say("About a week after visiting the stores I received an email from " + petStores[3] + " with some information about puppies on sale:")



//This function uses JSON data to show if a puppy fits the purchase criteria.

var purchasePuppy = function (json3Data)	{
	for (var i=0; i<json3.puppiesOnSale.length; i++) {
	var dogSale = json3.puppiesOnSale[i];

	var myBudget= 2000;
	if (dogSale.breed != "Boston Terrier" && dogSale.price <= myBudget && dogSale.female == true){
		//console.log("This puppy is a possibility. She matches my wishlist for price, gender and breed.");
		console.log("There is a " + dogSale.breed + " puppy available for $" + dogSale.price + ". This puppy is a possibility. It matches my wishlist for price, gender and breed.");

	}
else
		console.log("There is a " + dogSale.breed + " puppy available for $" + dogSale.price + ". I shouldn\'t buy this puppy. It doesn\'t fit all of my criteria.");
};


};

purchasePuppy(json3);


say("In the end, I really fell in love with a Mini Walrus puppy, a cross between a Shar-Pei and a Bassett Hound. Unfortunately, the last one was sold. I think I\'ll hold out and wait for a female to become available.");