/*
langClass[0] = ["Fighter"];
langClass[1] = ["Rogue"];
langClass[2] = ["Archer"];
langClass[3] = ["Mage"];
langClass[4] = ["Bard"];
langClass[5] = ["Priest"];
*/
var character = {

	classes: [],

	init: function(){
		this.initStats();
		this.renderSelects();
		this.populateSelects();
	},

	initStats: function(){
		// init hp
		for ( var i = 0; i < this.classes.length; i++ ) {
			this.classes[i].hp = stats.baseHealth;
			// append health modifers per subclass
			for ( var subclass in this.classes[i].subclasses ) {
				this.classes[i].hp += this.classes[i].subclasses[subclass].healthModifier;
			}
		}
	},

	renderSelects:function(){
		for (var i=1; i<=game.partySize; i++) {
			var character_select = '<div id="character-'+i+'" class="character-container"><div class="ui-bar ui-bar-e">';
			character_select += '<h2 data-translation="lang1'+(i+5)+'"></h2>';
			character_select += '<label for="character-'+i+'-name" data-translation="lang15"></label>';
			character_select += '<input type="text" name="character-'+i+'-name"></input>';
			character_select += '<select name="character-'+i+'" class="character-select" id="character-'+i+'-select"></select>';
			character_select += '<div id="character-'+i+'-stats"></div>';
			character_select += '</div></div>';
			$('#characters').append(character_select);
		}
	},

	populateSelects:function(){
	$('.character-select').append('<option value="">'+lang[14][langId]+'</option>')
		for (var i = 0; i < this.classes.length; i++ ) {
			$('.character-select').append('<option value="'+i+'">'+this.classes[i].name+'</option>');
		}
	}
}

$('document').ready(function(){
	$('.character-select').on('change', function(event){
		num = event.currentTarget.name.slice(-1);
		c_id = event.currentTarget.selectedIndex - 1;
		if ( c_id === -1 ) {
			$('#character-'+num+'-stats').html('');
		} else {
			var stat = '';
			for ( var subclass in character.classes[c_id].subclasses ) {
				if ( subclass !== "0" ) {
					stat += ', ';
				}
				stat += character.classes[c_id].subclasses[subclass].name
			}
			stat += '<br>' + character.classes[c_id].description
			stat += '<br>' + lang[39][langId] + ': ' + stats.baseLevel;
			stat += '<br>' + lang[40][langId] + ': ' + stats.baseExperience;
			stat += '<br>' + lang[37][langId] + ': ' + character.classes[c_id].hp;
			stat += '<br>' + lang[38][langId];
			for ( var dmgtype in damage.types ) {
				stat += '<br>' + lang[damage.types[dmgtype].langIndex][langId].toString() + ': ' + damage.types[dmgtype].baseResist;
			}
			$('#character-'+num+'-stats').html(stat);
		}
	});
});

// Fighter
character.classes[0] = {
	name: langClass[0],
	subclasses: [subClasses[0], subClasses[5]],
	resource: resources[0],
	description: lang[41][langId],
}
// Rogue
character.classes[1] = {
	name: langClass[1],
	subclasses: [subClasses[0], subClasses[1]],
	resource: resources[1],
	description: lang[42][langId],
}
// Archer
character.classes[2] = {
	name: langClass[2],
	subclasses: [subClasses[2]],
	resource: resources[2],
	description: lang[43][langId],
}
// Mage
character.classes[3] = {
	name: langClass[3],
	subclasses: [subClasses[3]],
	resource: resources[3],
	description: lang[44][langId],
}
// Bard
character.classes[4] = {
	name: langClass[4],
	subclasses: [subClasses[4]],
	resource: resources[4],
	description: lang[45][langId],
}
// Priest
character.classes[5] = {
	name: langClass[5],
	subclasses: [subClasses[4], subClasses[3]],
	resource: resources[5],
	description: lang[46][langId],
}
