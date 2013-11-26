function translate() {
	var selector;
	for (var i = 0; i < lang.length; i++ ) {
		$('[data-translation="lang'+i+'"').html(lang[i][langId]);
	}
}

function populateSelects() {
	$('.character-select').append('<option value="">'+lang[14][langId]+'</option>')
	for (var i = 0; i < charClasses.classes.length; i++ ) {
		$('.character-select').append('<option value="'+i+'">'+charClasses.classes[i]+'</option>');
	}
}

$(document).ready(function(){
	charClasses.renderSelects(game.partySize);
	populateSelects();
	translate();
});
