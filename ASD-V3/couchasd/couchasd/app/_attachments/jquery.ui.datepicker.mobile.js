/*
* jQuery Mobile Framework : temporary extension to port jQuery UI's datepicker for mobile
* Copyright (c) jQuery Project
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*/
(function($, undefined ) {

	var prevDp = $.fn.datepicker;
	
	$.fn.datepicker = function( options ){
		
		var dp = this;
	
		prevDp.call( this, options );
		

		function updateDatepicker(){
			$( ".ui-datepicker-header", dp ).addClass("ui-body-c ui-corner-top").removeClass("ui-corner-all");
			$( ".ui-datepicker-prev, .ui-datepicker-next", dp ).attr("href", "#");
			$( ".ui-datepicker-prev", dp ).buttonMarkup({iconpos: "notext", icon: "arrow-l", shadow: true, corners: true});
			$( ".ui-datepicker-next", dp ).buttonMarkup({iconpos: "notext", icon: "arrow-r", shadow: true, corners: true});
			$( ".ui-datepicker-calendar th", dp ).addClass("ui-bar-c");
			$( ".ui-datepicker-calendar td", dp ).addClass("ui-body-c");
			$( ".ui-datepicker-calendar a", dp ).buttonMarkup({corners: false, shadow: false}); 
			$( ".ui-datepicker-calendar a.ui-state-active", dp ).addClass("ui-btn-active"); // selected date
			$( ".ui-datepicker-calendar a.ui-state-highlight", dp ).addClass("ui-btn-up-e"); // today"s date
	        $( ".ui-datepicker-calendar .ui-btn", dp ).each(function(){
				var el = $(this);

				el.html( el.find( ".ui-btn-text" ).text() ); 
	        });
		};
		
		updateDatepicker();
		
		$( dp ).click( updateDatepicker );
		
		return this;
	};


$( ".ui-page" ).live( "pagecreate", function(){     
    $( "input[type='date'], input[data-type='date']" ).each(function(){
        if ($(this).hasClass("hasDatepicker") == false) {
            $(this).after( $( "<div />" ).datepicker({ altField: "#" + $(this).attr( "id" ), showOtherMonths: true }) );
            $(this).addClass("hasDatepicker");
        }
    }); 
});
})( jQuery );