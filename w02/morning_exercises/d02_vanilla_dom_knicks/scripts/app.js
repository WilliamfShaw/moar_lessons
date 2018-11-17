window.onload = function() {
	console.log("app.js linked");

	var newKnicks = [
	  "LeBron James",
	  "Kevin Durant",
	  "Marc Gasol",
	  "James Harden",
	  "Chris Paul",
	];

	// 1
	var newCoach = document.createElement('div');
	newCoach.classList.add('coach');
	document.body.appendChild(newCoach);


	// 2
	var topLevelHeader = document.createElement('h1');
	var span = document.createElement('span');
	span.innerHTML = 'New New York Knicks';
	span.className = 'shadowed';
	topLevelHeader.appendChild(span);
	document.body.appendChild(topLevelHeader);
	// 3

	var newRoster = document.createElement('ul');
    for (var i = 0; i < newKnicks.length; i++) {
      var lastName = newKnicks[i].split(' ')[1];
      var newKnick = document.createElement('li');
      newKnick.classList.add('newKnicks');
      newKnick.id = lastName;
      newKnick.innerText = newKnicks[i];
      newRoster.appendChild(newKnick);
    }
  document.body.appendChild(newRoster);


	// 4
	var newTrophy = function() {
    var div = document.createElement("div");
    div.id = "trophy";
    document.body.appendChild(div);
	};

	newTrophy();


	// 5


	// 6


	// 7


	// 8


	// 9


	// 10

	// 11

	// 12

	// 13
}