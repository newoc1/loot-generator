var Monster = function(name, level){
	this.name = name;
	this.level = level;
	this.specialAttacks = [];
}

Monster.MonsterNames = ["Kobold", "Rat", "Tradev", "Minotaur", "Orc", "Goatman"];

Monster.getRandomName = function(){
	var index = getRandomInt(0, Monster.MonsterNames.length);
	return Monster.MonsterNames[index];
}

Monster.prototype.addFunction = function(anonymousFunction){
	this.specialAttacks.push(anonymousFunction);
}

Monster.prototype.useSpecialAttack = function(){
	var specialAttackIndex = getRandomInt(0, this.specialAttacks.length);
	return this.specialAttacks[specialAttackIndex](this);
}


