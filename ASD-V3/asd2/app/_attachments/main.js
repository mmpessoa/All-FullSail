$(document).ready(function(){
	$.ajax({
		"url": "_view/subject",
		"dataType": "json",
		"success": function(data) {
			$.each(data.rows, function(index, topic){
				var title = topic.value.title;
				var note = topic.value.note;
				$('#subjectlist').append(
						$('<li>').append(
							$('<a>').attr("href", "#")
								.text(title)
						)
				);
			});
			$('#subjectlist').listview('refresh');
		}
	});
});

////

$(document).ready(function(){

	var $database = $.couch.db('asd2');
	
	$('#submit').on('click', function(x){
		x.preventDefault();
		var savetocouch = {};
		savetocouch._id = "creature:"+ $('#subject').val();
		savetocouch.creature = $('#creature').val();
		savetocouch.subject = $('#subject').val();
		savetocouch.description = $('#description').val();
		$database.saveDoc(savetocouch, {
			success : function() {
				$.mobile.changePage('#home');
				alert("Your entry has been saved.");
			},
		});
	});

	
	////
	
	
	$( document ).on( "pageshow", "#home", function() {
		$.couch.db("asd2").view("app/subject", {
			success: function(data) {
				$('#subjectlist').empty();
				$.each(data.rows, function(index, value) {
					var item = (value.value || value.doc);
					$('#subjectlist').append(
						$('<li>').append(
							$('<a>')
								.attr("href". "subject.html?subject=" + item.title)
								.text(item.note)
						)
					);
				});
				$('#subjectlist').listview('refresh');
			}
		});
	});

	var urlVars = function() {
		var urlData = $($.mobile.activePage).data("url");
		var urlParts = urlData.split('?');
		var urlPairs = urlParts[1].split(&');
		var urlValues = {};
		for (var pair in urlPairs) {
			var keyValue = urlPairs[pair].split('=');
			var key = decodeURIComponent(keyValue[0]);
			var value = decodeURIComponent(keyValue[1]);
			urlValues[key] = value;
		}
		return urlValues;
	};


	$( document ).on( "pageshow", "#subject", function() {
		var program = urlVars()["subject"];
	 	$.couch.db("asd2").view("app/subjectCreature", {
			key: "subject:" + subject
		}); 
	});