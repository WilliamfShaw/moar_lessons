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
  newCoach.className = 'coach';

  // 2
  document.body.appendChild(newCoach);

  // 3
  var topLevelHeader = document.createElement('h1');
  var span = document.createElement('span');

  // 4
  span.innerText = 'New New York Knicks';

  // 5
  span.className = 'shadowed';

  // 6
  topLevelHeader.appendChild(span);

  // 7
  document.body.appendChild(topLevelHeader);

  // 8
  var trophy = document.createElement('div');

  // 9
  trophy.id = 'trophy';

  // 10
  document.body.appendChild(trophy);

  // 11
  var newRoster = document.createElement('ul'); 

  // 12

  for (var i = 0; i < newKnicks.length; i++) {
    var knick = document.createElement('li');
    knick.className = 'newKnicks';
    // Split each name, use [1] to use the last name only.
    knick.id = newKnicks[i].split(' ')[1];
    knick.innerText = newKnicks[i];
    newRoster.appendChild(knick);
  }

  // 13
  document.body.appendChild(newRoster)
}