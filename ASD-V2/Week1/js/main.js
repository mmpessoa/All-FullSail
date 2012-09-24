/* 
Michelle M. Pessoa
ASD 1207
Due: 29 June 2012 
.JS Document
*/


var parseCryptidForm = function(data){
	// uses form data here;
	console.log(data);
};


$(document).ready(function(){
	
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