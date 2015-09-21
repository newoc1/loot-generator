$(document).ready(function(){
	var monsterName = Monster.getRandomName();
	var monster = new Monster(monsterName, getRandomInt(1,40));
	monster.addFunction(fireball);
	alert(JSON.stringify(monster));
	monster.addFunction(iceSpike);
	alert(JSON.stringify(monster));
	monster.useSpecialAttack();
	alert(JSON.stringify(monster));
	var item = new Item();
});

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}