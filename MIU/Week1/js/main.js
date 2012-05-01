/* 
Michelle M. Pessoa
MIU 1203
Project 1
01 March 2012 
.JS Document
*/

// Based on code from Week 2-4 VFW videos.
//Thumbnail images used in code were purchased from Shutterstock.com.


//This function prevents any JavaScript from executing until the DOM is ready -- i.e. all HTML is loaded.
window.addEventListener("DOMContentLoaded", function(){
	
	//getElementByID function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}


	  // Create select field element and populate with options. 
	  function makeCats() {
		  //formTag is an array of all the form tags.
		  var formTag = document.getElementsByTagName("form"), 
		  	  selectLi = $("select"),
		      makeSelect = document.createElement("select");
		  makeSelect.setAttribute("id", "groups"); 
		  for (var i=0, j=contactGroups.length; i<j; i++){
			  var makeOption = document.createElement("option");
			  var optText = contactGroups[i];
			 // makeOption.setAttribute("value", optText);
			  makeOption.setAttribute("value", contactGroups[i]);
			  makeOption.innerHTML = optText;
			  makeSelect.appendChild(makeOption);
		  }
		  selectLi.appendChild(makeSelect);
    }
  
  	  //Find value of selected radio button.
  	 function getSelectedRadio(){
		 //Creates an array of radio buttons.
		 var radios = document.forms[0].gender; 
		 for (var i=0; i<radios.length; i++){
			 if (radios[i].checked){
				 genderValue = radios[i].value;
			 }
		 }
  	 }


  	  //Set the value of the checkbox when clicked.
  	 function setCheckboxValue(){
		 if($('newsletter').checked){
			 newsletterValue = $('newsletter').value;
		 }else{
			 newsletterValue = "No";
		 }
  	 }


  	 //Turn links on or off.
	function toggleControls(n){
		switch(n){
			case "on":
				$('contactForm').style.display = "none";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "none";
				$('addNew').style.display = "inline";
				break;
			case "off":
				$('contactForm').style.display = "block";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "inline";
				$('addNew').style.display = "none";
				$('items').style.display = "none";
				break;
			default:
				return false;
		}
	}
	
	
	
	  // This function saves the submitted data to local storage. 
	  function storeData(key) {
		  //If there is no key, this means this is a brand new item and we need a new key.
		  if (!key){
		  	var id 			= Math.floor(Math.random()*100000001);
		  }else{
			  //Set the id to the existing key we're editing so that it will save over the data.
			  //The key is the same key that's been passed along from the editSubmit event handler
			  //to the validate function, and then passed here, into the storeData function.
			id = key;
		  }
		  
		  //Gather up all of our form field values and store in an object.
		  //Object properties contain array with the form label and input values.
		  getSelectedRadio();
		  setCheckboxValue();
		  var 	item 			= {};
		  		item.fname 		= ["First Name:", $('fname').value];
		 		item.lname 		= ["Last Name:", $('lname').value];
		  		item.email 		= ["Email:", $('email').value];
		  		item.date 		= ["Date:", $('date').value];
		  		item.location 	= ["Location:", $('location').value];
		  		item.groups 	= ["Cryptid:", $('groups').value];
		    	item.gender 	= ["Gender:", genderValue];
		  		item.number 	= ["Number:", $('number').value];
		  		item.notes  	= ["Notes:", $('notes').value];
		    	item.newsletter = ["Newsletter:", newsletterValue];
	 //Save data into Local Storage. Use Stringify to convert our object to a string.
	 localStorage.setItem(id, JSON.stringify(item));
	 alert("Sighting Logged!");
  	 }
  
  

	  // This function retrieves data from local storage and displays it on a web page. 
	  function getData() {
		  toggleControls("on");
		  if (localStorage.length === 0){
			  alert("No sightings were saved, so default data was added.");
			  autoFillData();
		  }
		  //Write data from local storage to the browser.
		  var makeDiv = document.createElement("div");
		  makeDiv.setAttribute("id", "items");
		  var makeList = document.createElement("ul");
		  makeDiv.appendChild(makeList);
		  document.body.appendChild(makeDiv);
		  $('items').style.display = "block"; // Just in case it got turned off by the toggle function above.
		  for (var i=0, len=localStorage.length; i<len; i++){
			  var makeLi = document.createElement("li");
			  var linksLi = document.createElement("li");
			  makeList.appendChild(makeLi);
			  var key = localStorage.key(i);
			  var value = localStorage.getItem(key);
			  //Convert the string from local storage value back to an object using JSON.parse().
			  var obj = JSON.parse(value);
			  var makeSubList = document.createElement("ul");
			  makeLi.appendChild(makeSubList);
			  //Add image for each category.
			  getImage(obj.groups[1], makeSubList); 
			  for (var n in obj){
				  var makeSubli = document.createElement("li");
				  makeSubList.appendChild(makeSubli);
				  var optSubText = obj[n][0] +" "+ obj[n][1];
				  makeSubli.innerHTML = optSubText;
				  makeSubList.appendChild(linksLi);
			  }
			  makeItemLinks(localStorage.key(i), linksLi); //Create edit and delete buttons for each item in local storage.
		  }
  	  }
	  
	  
	  //Get the image for each category.
	  function getImage(catName, makeSubList){
		  var imageLi = document.createElement("li");
		  makeSubList.appendChild(imageLi);
		  var newImg = document.createElement("img");
		  var setSrc = newImg.setAttribute("src", "images/"+ catName + ".png");
		  imageLi.appendChild(newImg);
	  }
	  
	  
	  //Auto populate local storage.
	  function autoFillData(){
		  //The JSON Object data is being loaded from json.js.
		  //Store the JSON OBJECT into Local Storage.
		  for (var n in json){
			  var id 			= Math.floor(Math.random()*100000001);
			  localStorage.setItem(id, JSON.stringify(json[n]));
		  }
		  
	  }
  
  
 	  //Make Item Links
	  //Create the edit and delete links for each stored item when displayed.
	  function makeItemLinks(key, linksLi){
		  //add edit single item link
		  var editLink = document.createElement("a");
		  editLink.href = "#";
		  editLink.key = key;
		  var editText = "Edit Info";
		  editLink.addEventListener("click", editItem);
		  editLink.innerHTML = editText;
		  linksLi.appendChild(editLink);
		  
		  //add line break
		  var breakTag = document.createElement("br");
		  linksLi.appendChild(breakTag);
		  
		  //add delete single item link
		  var deleteLink = document.createElement("a");
		  deleteLink.href = "#";
		  deleteLink.key = key;
		  var deleteText = "Delete Entry";
		  deleteLink.addEventListener("click", deleteItem);
		  deleteLink.innerHTML = deleteText;
		  linksLi.appendChild(deleteLink);

		  //add horizontal line
		  var hrTag = document.createElement("hr");
		  linksLi.appendChild(hrTag);
		  
	  }



	  // Edit single item function goes here.
	  //Something in this function breaks the code and causes a syntax error on the final line of this document.
	  function editItem() {
		  //Grab the data from our item from Local Storage.
		  var value = localStorage.getItem(this.key);
		  var item = JSON.parse(value);
		  
		  //Show the form
		  toggleControls("off");
		  
		  //populates form fields with current localStorage values
		 $('fname').value 		= item.fname[1]; 
		 $('lname').value 		= item.lname[1]; 
		 $('email').value 		= item.email[1]; 
		 $('date').value 		= item.date[1]; 
		 $('location').value 	= item.location[1]; 
		 $('groups').value 		= item.groups[1];
		 var radios = document.forms[0].gender;
		 for (var i=0; i<radios.length; i++){
			 if(radios[i].value == "Male" && item.gender[1] == "Male"){
				 radios[i].setAttribute("checked", "checked");
			 }else if(radios[i].value == "Female" && item.gender[1] == "Female"){
				 radios[i].setAttribute("checked", "checked");
			 }else if(radios[i].value == "Unknown" && item.gender[1] == "Unknown"){
				 radios[i].setAttribute("checked", "checked");
			 }
		 }

		 $('number').value 		= item.number[1]; 
		 $('notes').value 		= item.notes[1]; 
		 
		 if (item.newsletter[1] == "Yes"){
			 $('newsletter').setAttribute("checked", "checked");
			 }
			 
		 //Remove the initial listener from the input 'save' button.
		 save.removeEventListener("click", storeData);
		 $('submit').value = "Edit Info";
		 var editSubmit = $('submit');
		 //Save the key value established in this function as a property of the editSubmit event
		 //so we can use that value when we save the data we edited.
		 editSubmit.addEventListener("click", validate);
		 editSubmit.key = this.key;
	  }
	  


	  //Delete item function
	  function deleteItem(){
		  var ask = confirm("Are you sure you want to delete this entry?");
		  if(ask){
			  localStorage.removeItem(this.key);
			  alert("Entry was deleted!");
			  window.location.reload();
		  }else{
			  alert("Entry was NOT deleted.");
		  }
	  }



	  // This function clears all data and reloads the page.
	  function clearLocal() {
		  if(localStorage.length === 0){
			  alert("There is no data to clear.");
		  }else{
			  localStorage.clear();
			  alert("All data deleted.");
			  window.location.reload();
			  return false;
		  }
	  }




	  //Validation functions.
	  function validate(e){
		  //Define the elements we want to check.
		  var getFname 		= $('fname');
		  var getLname 		= $('lname');
		  var getEmail 		= $('email');
		  var getLocation 	= $('location');
		  var getGroups 	= $('groups');
		  var getNotes 		= $('notes');
		  
		  //Reset Error Messages
		  errMsg.innerHTML = "";//There may be something wrong on this line.
		  getFname.style.border 	= "1px solid black";
		  getLname.style.border 	= "1px solid black";
		  getEmail.style.border 	= "1px solid black";
		  getLocation.style.border 	= "1px solid black";
		  getGroups.style.border 	= "1px solid black";
		  getNotes.style.border 	= "1px solid black";
		  		  
		  
		  //Get Error Messages
		  var messageArray = []; 
			  	  

		  //First Name Validation
		  if(getFname.value === ""){
			  var fNameError = "Please enter a first name.";
			  getFname.style.border = "1px solid red";
			  messageArray.push(fNameError);
		   }

		  
		  //Last Name Validation
		  if(getLname.value === ""){
			  var lNameError = "Please enter a last name.";
			  getLname.style.border = "1px solid red";
			  messageArray.push(lNameError);
		   }
		  
		  //Email Validation
		  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		  if(!(re.exec(getEmail.value))){
			  var emailError = "Please enter a valid email address.";
			  getEmail.style.border = "1px solid red";
			  messageArray.push(emailError);
		   }
		   
		  //Location Validation
		  if(getLocation.value === ""){
			  var locationError = "Please enter a location.";
			  getLocation.style.border = "1px solid red";
			  messageArray.push(locationError);
		   }

		   
		  //Groups Validation
		  if(getGroups.value === "--Select type of cryptid--"){
			  var groupsError = "Please choose a cryptid.";
			  getGroups.style.border = "1px solid red";
			  messageArray.push(groupsError);
		   }


		  //Notes Validation
		  if(getNotes.value === ""){
			  var notesError = "Please describe the encounter.";
			  getLocation.style.border = "1px solid red";
			  messageArray.push(notesError);
		   }


		   //If there are any errors, display them on the screen.
		   if (messageArray.length >= 1){
			   for(var i=0, j=messageArray.length; i<j; i++){
				   var txt = document.createElement("li");
				   txt.innerHTML = messageArray[i];
				   errMsg.appendChild(txt);
			   }
			   e.preventDefault();
			   return false;
		   }else{
			   //If all is okay, save our data! Send the key value (which came from the editData function).
			   //Remember, this key value was passed through the editSubmit event Listener as a property.
			   storeData(this.key);
		   }
	  }



	  //Establish variable defaults and run initial functions
	  var contactGroups = ["--Select type of cryptid--", "Alien", "Bigfoot", "Chupacabra", "Dinosaur", "Fairy", "Ghost", "Mothman", "SeaMonster", "Vampire", "Werewolf", "Other"],
	  	  genderValue,
		  newsletterValue = "No",
		  errMsg = $('errors');



	  // Set link and submit click events. 
	  var displayLink = $('displayLink');
	  displayLink.addEventListener("click", getData);
	  var clearLink = $('clear');
	  clearLink.addEventListener("click", clearLocal);
	  var save = $('submit');
	  save.addEventListener("click", validate); 

	  
	  //Set Checkbox and Radio Click Events: Attach event listener to each radio button and checkbox.
	  var checkbox = $('newsletter');
	  checkbox.addEventListener("click", setCheckboxValue);
	  var radios = document.forms[0].gender;
	  for (var i=0; i<radios.length; i++){
		  radios[i].addEventListener("click", getSelectedRadio);
	  }


	//Run makeCats();
	  makeCats();


});