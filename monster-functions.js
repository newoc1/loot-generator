var fireball = function(monster){
		console.log("Threw a fireball for: "+(10 + Math.floor(monster.level/2)));
}

var iceSpike = function(monster){
		console.log("Threw an ice spike for: "+(5 + monster.level));
		console.log("Monster gains resistance to ice damage!");
		monster.iceResistance = 30;
}