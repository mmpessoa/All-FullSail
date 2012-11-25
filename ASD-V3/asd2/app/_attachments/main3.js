$(document).ready(function(){
	$.ajax({
		"url": "_view/subject",
		"dataType": "json",
		"success": function(data) {
			$.each(data.rows, function(index, subject){
				var reportername = subject.value.reportername;
				var cryptidnumber = subject.value.cryptidnumber;
				var cryptidtype = subject.value.cryptidtype;
				var encounter = subject.value.encounter;
				$('#subjectlist').append(
						$('<li>').append(
							$('<a>').attr("href", "#")
								.text(cryptidtype)
						)
				);
			});
			$('#subjectlist').listview('refresh');
		}
	});
});

////

$(document).ready(function(){

	var $database = $.couch.db('asd');
	
	$('#submit').on('click', function(x){
		x.preventDefault();
		var savetocouch = {};
		savetocouch._id = "sighting:"+ $('#reportername').val();
		savetocouch.reportername = $('#reportername').val();
		savetocouch.cryptidtype = $('#cryptidtype').val();
		savetocouch.cryptidnumber = $('#cryptidnumber').val();
		savetocouch.encounter = $('#encounter').val();
		$database.saveDoc(savetocouch, {
			success : function() {
				$.mobile.changePage('#home');
				alert("Your sighting has been saved.");
			},
		});
	});

	
	////
	
	
	$('#home').live("pageshow", function() {
		$.couch.db("cryptidkeeper").view("app/subject", {
			success: function(data) {
				//console.log(data);
				$('#subjectlist').empty();
				$.each(data.rows, function(index, value) {
					var item = (value.value || value.doc);
					$('#subjectlist').append(
						$('<li>').append(
							$('<a>')
								.attr("href". "subject.html?subject=" + item.reportername)
								.text(item.title)
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


	$('#subject').live("pageshow", function() {
		var program = urlVars()["subject"];
		//console.log(subject);
	 	$.couch.db("cryptidkeeper").view("app/subjectCreature", {
			key: "subject:" + subject
		}); 
	});