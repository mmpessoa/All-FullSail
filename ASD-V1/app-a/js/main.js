/* 
Michelle M. Pessoa
ASD-1205
Project 2
Due date: 10 May 2012 
.JS Document
*/


var parseCryptidForm = function(data){
	// uses form data here;
	console.log(data);
};


$(document).ready(function(){
$("#json").on("click", function(){
	console.log("JSON click");
	}
	);	
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
	
});