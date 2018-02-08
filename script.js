"use strict";

$(document).ready(function() {

	$('img').click(function() {
		var temp = $(this).attr('src')
		console.log(temp);
		$(this).attr('src', $(this).attr('data-alt-src'));
		$(this).attr('data-alt-src', temp);
	});

});