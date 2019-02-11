var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("recipes", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

// "machines" : {
//   "f91dc3e8cfa484a6d37911d951ac0a72" : {
//     "brew_logs" : [ "all logs as strings", "all logs as strings", "all logs as strings", "all logs as strings" ],
//     "last_brew_date" : "2019-01-24T12:42:00-05:00",
//     "last_brew_log" : "logname",
//     "last_brew_recipe" : "actual recipe stored here",
//     "rinse_calendar" : [ "2019-01-24T12:42:00-05:00", "2019-01-24T12:42:00-05:00", "2019-01-24T12:42:00-05:00", "2019-01-24T12:42:00-05:00", "2019-01-24T12:42:00-05:00" ]
//   }
// },
