$(document).ready(function(){
	$('#jsonbutton').on('click', function(){
		console.log("json button");
		
		$('#xhrstuff').empty();
$.ajax({
  type: "GET",
  url: "xhr/data.json",
  dataType: "json",
  success: function(result){
	  for (var i=0, j=result.jsonList.length; i<j; i++){
		  var showjson = result.jsonList[i];
		  $(''+
		  	'<ul>'+
		  		'<li>'+ 'First Name:' + showjson.fname[1] +'</li>'+
				'<li>'+ 'Last Name:' + showjson.lname[1] +'</li>'+
				'<li>'+ 'Email Address:' + showjson.email[1] +'</li>'+
				'<li>'+ 'Date:' + showjson.date[1] +'</li>'+
				'<li>'+ 'Location:' + showjson.location[1] +'</li>'+
				'<li>'+ 'Type:' + showjson.groups[1] +'</li>'+
				'<li>'+ 'Gender:' + showjson.gender[1] +'</li>'+
				'<li>'+ 'Number Seen:' + showjson.number[1] +'</li>'+
				'<li>'+ 'Notes:' + showjson.notes[1] +'</li>'+
				'<li>'+ 'Newsletter Subscriber:' + showjson.newsletter[1] +'</li>'+
			'</ul>'
			).appendTo('#xhrstuff');
	  }
    }
 });
 $('#xhrstuff').listview('refresh');
return false;
});
});

// xml


$('#xmlbutton').on('click', function(){
		console.log("xml button");
		
		$('#xhrstuff').empty();
$.ajax({
  type: "GET",
  url: "xhr/data.xml",
  dataType: "xml",
  success: function(bookdata){
	  $(bookdata).find("ebook").each(function(){
		var topic = $(this).find('topic').text();
		var title = $(this).find('title').text();
		var author = $(this).find('author').text();
		var price = $(this).find('price').text();
                     $('#xhrstuff').append($(' ' +
                         '<ul>' +
                         '<li>Topic: ' + topic + '</li>' +
                         '<li>Title: ' + title + '</li>' +
                         '<li>Author: ' + author + '</li>' +
                         '<li>Price: ' + price + '</li>' + 
						 '</ul><br/>'));


 });

         $('#xhrstuff').listview('refresh');

	  }
});
});



// csv

$('#csvbutton').on('click', function(){
		console.log("csv button");
		
		$('#xhrstuff').empty();
$.ajax({
  type: "GET",
  url: "xhr/data.csv",
  dataType: "text",
  success: function(sightingstally){
             var cryptidTotals = sightingstally.split("\n");
             for(var i=1; i < cryptidTotals.length; i++){
                 var categories = cryptidTotals[i];
                 var divider = categories.split(",");

                 $('#xhrstuff').append($(' ' +
                     '<ul>' +
                     '<li> ' + categories + '</li> ' +
                     '</ul><br/>'));
                }
             }
         });
     });     
     
	