var charClasses = {
	classes: [lang[7][langId], lang[8][langId], lang[9][langId], lang[10][langId], lang[11][langId], lang[12][langId]],
	renderSelects:function(){
		for (var i=1; i<=game.partySize; i++) {
			var ui_class;
			switch(i){
				case 1:
					ui_class = "ui-block-a";
					break;
				case 2:
					ui_class = "ui-block-b";
					break;
				case 3:
					ui_class = "ui-block-c";
					break;
			}
			var character_select = '<div id="character-'+i+'" class="character-container '+ui_class+'"><div class="ui-bar ui-bar-e">';
			character_select += '<h2 data-translation="lang1'+(i+5)+'"></h2>';
			character_select += '<label for="character-'+i+'-name" data-translation="lang15"></label>';
			character_select += '<input type="text" name="character-'+i+'-name"></input>';
			character_select += '<select name="character-'+i+'" class="character-select" id="character-'+i+'-select"></select></div></div>';
			$('#characters').append(character_select);
		}
		this.populateSelects();
	},
	populateSelects:function(){
	$('.character-select').append('<option value="">'+lang[14][langId]+'</option>')
		for (var i = 0; i < charClasses.classes.length; i++ ) {
			$('.character-select').append('<option value="'+i+'">'+charClasses.classes[i]+'</option>');
		}
	}
}
