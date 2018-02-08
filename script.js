"use strict";

$(document).ready(function() {


	// swap the images on click
	$('img').click(function() {

		//sets src into temp
		var temp = $(this).attr('src')

		//swaps the values
		$(this).attr('src', $(this).attr('data-alt-src'));
		$(this).attr('data-alt-src', temp);
	});

});