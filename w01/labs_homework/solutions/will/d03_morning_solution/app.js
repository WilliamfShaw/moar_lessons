
//part 1

var hari = ["hari", 50, "sananab"];
var tony = ["tony", 17, "regal"];
var mck = ["mckenneth",9001,"poop"];
var will = ["will", 186, "knits"];

hari.shift(0);

tony[1] = 18;

mck.push("swag");

will.pop();


// //part 2

// var array = [["hari", 50, "sananab"], ["tony", 17, "regal"], ["mckenneth",9001,"poop"], ["will", 186, "knits"]];

// for (var i = 0; i < array.length; i++) {
// 	console.log("Name: " + array[i][0].toUpperCase());
// 	console.log("Age: " + array[i][1]);
// 	console.log("Favorite word: " + array[i][2].split("").reverse().join(""));
// };


//part 3

// var pokeArray = [ 
// 	["Squirtle",["HP", [44, ["Attack", [48, ["Defense", [65, ["Speed",[43]]]]]]]]], 
// 	["Snorlax", ["HP", [160, ["Attack", [110, ["Defense", [65, ["Speed", [30]]]]]]]]], 
// 	["Mew", ["HP", [100, ["Attack", [100, ["Defense", [100, ["Speed", [100]]]]]]]]]
// ];

// for ( var i = 0; i < pokeArray.length; i++ ) {
// 	var currentArray = pokeArray[i];
// 	console.log(currentArray[0] + " || " + currentArray[1][0] + ": " + currentArray[1][1][0] + " || " + currentArray[1][1][1][0] 
// 				+ ": " + currentArray[1][1][1][1][0] + " || " + currentArray[1][1][1][1][1][0] + ": " + currentArray[1][1][1][1][1][1][0]
// 				+ " || " + currentArray[1][1][1][1][1][1][1][0] + ": " + currentArray[1][1][1][1][1][1][1][1][0]);
// };



// Aaron
// var multiArray = [
//    ["hari", 50, "sananab"],
//    ["tony", 17, "regal"],
//    ["mckenneth",9001,"poop"],
//    ["will", 186, "knits"]
// ];

// for (var i=0; i<multiArray.length; i++) {
//     for (j=0; j<multiArray[i].length; j++) {
//         if (j===0) {
//             console.log("Name: " + multiArray[i][j]);
//         }
//         else if (j===1) {
//             console.log("Age: " + multiArray[i][j]);
//         }
//         else if (j===2) {
//             console.log("Favorite word: " + multiArray[i][j].split('').reverse().join('')); // reverse only works on an array
//         }
//     }
// }

// Eric
// var instructors = [
//    ["hari", 50, "sananab"],
//    ["tony", 17, "regal"],
//    ["mckenneth",9001,"poop"],
//    ["will", 186, "knits"]
// ]

// for (var i = 0; i < instructors.length; i++) {
//     console.log("Name:", instructors[i][0].toUpperCase());
//     console.log("Age:", instructors[i][1]);
//     console.log("Favorite word:", instructors[i][2].split("").reverse().join(""));
// }


// var pokemon = [ 
// ["Squirtle", ["HP", [44, ["Attack", [48, ["Defense", [65, ["Speed", [43]]]]]]]]], 
// ["Snorlax", ["HP", [160, ["Attack", [110, ["Defense", [65, ["Speed", [30]]]]]]]]], 
// ["Mew", ["HP", [100, ["Attack", [100, ["Defense", [100, ["Speed", [100]]]]]]]]] ]

// for (var i = 0; i < pokemon.length; i++) {
//     var monster = pokemon[i];
//     var pipes = " || ";
//     var colon = ": ";
//     console.log(monster[0], pipes, monster[1][0], colon, monster[1][1][0], pipes, monster[1][1][1][0], colon, monster[1][1][1][1][0], pipes, monster[1][1][1][1][1][0], colon, monster[1][1][1][1][1][1][0], pipes, monster[1][1][1][1][1][1][1][0], colon, monster[1][1][1][1][1][1][1][1][0]);
// }










































