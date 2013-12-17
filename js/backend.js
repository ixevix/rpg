function translate() {
	for (var i = 0; i < lang.length; i++ ) {
		$('[data-translation="lang'+i+'"').html(lang[i][langId]);
	}
}

$(document).ready(function(){
	charClasses.renderSelects();
	translate();
});
