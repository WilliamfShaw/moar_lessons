// $(function() {
//   console.log("can i kick it?  (yes you can!)");
//   weatherTemplate = Handlebars.compile($('#weather-template').html());
// });

// var customSearch = function(citySearch) {
//   // Step 9 write your code here.  
// }

// var getWeather = function(search) {
//   var weatherURL = [
//     'http://api.openweathermap.org/data/2.5/weather?q=',
//     search, 
//     '&units=imperial'
//   ].join('');
//   // Step 10 write your code here.  
// }

// var renderWeather = function(data) {
//   // Step 11 write your code here.
// }

var response = {
  message: "accurate",
  cod: "200",
  count: 1,
  list: [
    {
      id: 1796236,
      name: "WDI-McClane",
      students_num: 27,
      city: 'NYC',
      instructors: [
        {
          name: 'McKenneth Scott III',
          age: 9001
        },
        {
          name: 'Hari Mohanraj',
          age: 50
        }
      ],
      jr_instructors: [
        {
          name: 'Tony DeFreitas',
          age: 17
        },
        {
          name: 'Will Shaw',
          age: 8
        }
      ],
      ta: [
        {
          name: 'Matt Smith',
          age: 'null'
        },
      ],
      producer: [
        {
          name: 'Sarah Maibach',
          age: NaN
        }
      ]
    }
  ]
}