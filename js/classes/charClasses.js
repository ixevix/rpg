var charClasses = {
	classes: [lang[7][langId], lang[8][langId], lang[9][langId], lang[10][langId], lang[11][langId], lang[12][langId]],
	renderSelects:function(numSelects){
		if (numSelects < 1 || numSelects > 100) return;
		for (var i=1; i<=numSelects; i++) {
			p = Math.floor(100/numSelects);
			var character_select = '<div id="character-'+i+'" class="character-container" style="width:'+p+'%">';
			character_select += '<label for="character-'+i+'" class="select" data-translation="lang13">:</label>';
			character_select += '<select name="character-'+i+'" class="character-select" id="character-'+i+'-select"></select></div>'
			$('#characters').append(character_select);
		}
	}
}
