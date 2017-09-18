alert("zombie!!!! ARRRRRR");

var weapon = prompt("what weapon do you choose? Bow, Arrow, axe or chicken?");
var randomNum = Math.round(Math.random());

alert("you attack a zombie with your" + " " + weapon);

if (randomNum === 0) {
	alert("zombie win")
} else if (randomNum === 1) {
	alert("you kill the zombie with" + " " + "weapon");
}

