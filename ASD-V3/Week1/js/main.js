/* 
Michelle M. Pessoa
ASD 1210
Due: 27 September 2012 
.JS Document
*/




/* $(document).ready(function(){ */
// Use pageInit instead

$("#home").on('pageinit', function(){

//Code needed for homepage goes in this function.
	
/*
	var rcform = $('#recordcryptidform'),
		rcerrorslink = $('#rcerrorslink')
	;	
	
	rcform.validate({
		invalidHandler: function(form, validator){
			rcerrorslink.click();
			var html = '';
			for (var key in validator.submitted){
				var label = $('label[for^="'+ key +'"]').not('[generated]');
				var legend = label.closest('fieldset').find('.ui-controlgroup-label');
				var fieldName = legend.length ? legend.text() : label.text();
				html += '<li>'+ fieldName +'</li>';
			};
			$("#recordcryptiderrors ul").html(html);
		},
		submitHandler: function(){
			var data = rcform.serializeArray();
			parseCryptidForm(data); 
		}
	});
*/
	
});



/////////////////////////////////////////////////////////////

$("#additem").on('pageinit', function(){

//Code needed for Add Item Page goes in this function.


$('#submit').on('click', function saveSighting(id) {
    //Declare form variables, generate a key to create unique ID.    
    var dt = new Date();
    var key =  (dt.getTime());
        var reporternamefirst =  $('#reporternamefirst').val();
        var reporternamelast =  $('#reporternamelast').val();
        var reporteremail =  $('#reporteremail').val();
        var sightingdate =  $('#sightingdate').val();
        var cryptidlocation =  $('#cryptidlocation').val();
        var cryptidnumber =  $('#cryptidnumber').val();
        var cryptid-gender =  $('#cryptid-gender').val();
        var cryptid-type =  $('#cryptid-type').val();
        var encounter =  $('#encounter').val();
        var checkbox;
        if ($('#checkbox-news').is(":checked")){
		checkbox = "Subscriber"
		}else{
		checkbox = "Non-Subscriber"
		};

//Create variable to load the data into Local Storage as a string

    var cryptEntry = [reporternamefirst, reporternamelast, reporteremail, sightingdate, cryptidlocation, cryptidnumber, cryptid-gender, cryptid-type, encounter, checkbox];

//Add data to Local Storage giving a key and string
    localStorage.setItem(key, cryptEntry);

//Reload page to load new form. Alert user that data was added.
    location.reload();
    alert("Your sighting has been logged.");
});	

//Toggle form on/off to display Local Storage data.
function toggleCtrl(t) {
    switch (t) {
    case "on":
        $('#recordcryptidform').css('display', 'none');
        break;
    case "off":
        $('#recordcryptidform').css('display', 'block');
        break;
    default:
        return false;
    }
}

//Load Local Storage data. 

$('#showData').on('click', function getData() {
	toggleCtrl("on"); 
    var getData = $('#localStorageContainer')[0];
    
//For loop pulls key and string and separates by commas.
    for (var i = 0, j = localStorage.length; i < j; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        value = value.split(',');
        
//Generate HTML to display Local Storage data
        
        $('<div>').attr({'class': 'cryptDiv'}).appendTo('#localStorageContainer');

//Load images
        $('<img>').attr({'src': 'images/' + value[0] + '.png'}).appendTo('. cryptDiv');

        $('<p>').html('First Name: ' + value[0]).appendTo('. cryptDiv');
        $('<p>').html('Last Name: ' + value[1]).appendTo('. cryptDiv');
        $('<p>').html('Email: ' + value[2]).appendTo('. cryptDiv');
        $('<p>').html('Date of Sighting: ' + value[3]).appendTo('. cryptDiv');
        $('<p>').html('Location of Sighting: ' + value[4]).appendTo('. cryptDiv');
        $('<p>').html('Number Seen: ' + value[5]).appendTo('. cryptDiv');        
        $('<p>').html('Gender: ' + value[6]).appendTo('. cryptDiv');
        $('<p>').html('Type of Being: ' + value[7]).appendTo('. cryptDiv');
        $('<p>').html('Encounter Description: ' + value[8]).appendTo('. cryptDiv');
        $('<p>').html('Subscribe to Newsletter? ' + value[9]).appendTo('. cryptDiv');
        

//Add Edit and Delete links
        $('<p>').html($('<a>').attr({'href': '#','onclick': 'deleteItem(' + key + ');'}).html('Delete Sighting')).appendTo('. cryptDiv');
        $('<p>').html($('<a>').attr({'href': '#','onclick': 'editItem(' + key + ');'}).html('Edit Sighting')).appendTo('. cryptDiv');
        $('<br>').html('').appendTo('. cryptDiv');
    }
});



/////////////////////////////////////////////////////////////


// Edit data from Local Storage

function editItem(id) {
    var cryptId = id;
	var value = localStorage.getItem(cryptId);
	value = value.split(',');

//Show the form
	toggleCtrl("off");

//Variables from form    
    var reporternamefirst = value[0];
    var reporternamelast = value[1];
    var reporteremail = value[2];
    var sightingdate = value[3];
    var cryptidlocation = value[4];
    var cryptidnumber = value[5];
    var cryptid-gender = value[6];
    var cryptid-type = value[7];
    var encounter = value[8];
    var checkbox;

//Turn variables into values
    $('#reporternamefirst').val(reporternamefirst);
    $('#reporternamelast').val(reporternamelast);
    $('#reporteremail').val(reporteremail);
    $('#sightingdate').val(sightingdate);
    $('#cryptidlocation').val(cryptidlocation);
    $('#cryptidnumber').val(cryptidnumber);    
    $('#cryptid-gender').val(cryptid-gender);    
    $('#cryptid-type').val(cryptid-type);    
    $('#encounter').val(encounter);    
    if ($('#checkbox-news').is(":checked")){
	checkbox = "Subscriber"
	}else{
	checkbox = "Non-Subscriber"
	};

// Display the edit button, and hides the submit button and the data list
    var edit = $('#editButton').css('display', 'block');
    var submit = $('#addSighting').css('display', 'none');
    var dataList = $('#data').css('display', 'none');

// Local Storage is updated when you click the Edit button.
    
    $('#editItem').on('click', function editItem() {
        var reporternamefirst =  $('#reporternamefirst').val();
        var reporternamelast =  $('#reporternamelast').val();
        var reporteremail =  $('#reporteremail').val();
        var sightingdate =  $('#sightingdate').val();
        var cryptidlocation =  $('#cryptidlocation').val();
        var cryptidnumber =  $('#cryptidnumber').val();
        var cryptid-gender =  $('#cryptid-gender').val();
        var cryptid-type =  $('#cryptid-type').val();
        var encounter =  $('#encounter').val();
        var checkbox;
        if ($('#checkbox-news').is(":checked")){
		checkbox = "Subscriber"
		}else{
		checkbox = "Non-Subscriber"
		};

        var cryptEntry = [reporternamefirst, reporternamelast, reporteremail, sightingdate, cryptidlocation, cryptidnumber, cryptid-gender, cryptid-type, encounter, checkbox];

//Update Local Storage
        localStorage.setItem(cryptId, cryptEntry);

//Reload form page and alert user that the edit was successful.
        location.reload();
        alert("Your sighting has been updated.");
        
    });
}


/////////////////////////////////////////////////////////////






// This function deletes a single cryptid record from Local Storage and reloads the page.

function deleteItem(id) {
    var ask = confirm("Are you sure you want to delete this entry? This cannot be undone.");
    if (ask) {
        localStorage.removeItem(id);
        alert("Entry was deleted!");
        window.location.reload();
    } else {
        alert("Entry was NOT deleted.");
    }
}





// This function clears all data and reloads the page.

function clearLocal() {
    if (localStorage.length === 0) {
        alert("There is no data to clear.");
    } else {
        var caution = confirm ("This action will erase all of your sightings. This cannot be undone.");
            if (caution){
                localStorage.clear();
                alert("All sightings have been deleted.");
                window.location.reload();
                return false;  
            } else {
               alert("Delete has been canceled. Your sightings have been retained."); 
            }
    }
}


//// Validation function below doesn't work anymore.



var parseCryptidForm = function(data){
	// uses form data here;
	console.log(data);
};

///

	var rcform = $('#recordcryptidform'),
		rcerrorslink = $('#rcerrorslink')
	;	
	
	rcform.validate({
		invalidHandler: function(form, validator){
			rcerrorslink.click();
			var html = '';
			for (var key in validator.submitted){
				var label = $('label[for^="'+ key +'"]').not('[generated]');
				var legend = label.closest('fieldset').find('.ui-controlgroup-label');
				var fieldName = legend.length ? legend.text() : label.text();
				html += '<li>'+ fieldName +'</li>';
			};
			$("#recordcryptiderrors ul").html(html);
		},
		submitHandler: function(){
			var data = rcform.serializeArray();
			parseCryptidForm(data); 
		}
	});


//End of Add Item page.

});
