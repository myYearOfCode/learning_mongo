var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
// TODO:
/*
this currently overwrites the entire entry. maybe it is safer to not do that.
especially if the _id changes and I'm using that id as a locator.

how am I going to name the recipes uniquely in the db?

*/
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

  // example data
  var myobj = {"name": "f91dc911d951ac0a733e8cfa484a6d37",
    "data" : {
      "brew_logs" : [ "all logs as strings", "all logs as strings", "all logs as strings", "all logs as strings" ],
      "last_brew_date" : "2019-01-24T12:42:00-05:00",
      "last_brew_log" : "logname",
      "last_brew_recipe" : "actual recipe stored here",
      "rinse_calendar" : [ "2019-01-24T12:42:00-05:00", "2019-01-24T12:42:00-05:00", "2019-01-24T12:42:00-05:00", "2019-01-24T12:42:00-05:00", "2019-01-24T12:42:00-05:00" ]
    }};

  // delete entry if this name already exists (IE overwrite)
  var myquery = {"name": "f91dc911d951ac0a733e8cfa484a6d37"};
  dbo.collection("machines").deleteMany(myquery, function(err, res) {
    if (err) throw err;
    console.log(res.result.n + " document(s) deleted");
    db.close();
  });

  // write the data
  dbo.collection("machines").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    // console.log(res);
    // console.log(res[0]._id); // returns just the id
      // then I would write it to the user db
      // and possibly write it (or the actual recipe) to the machine.
    db.close();
  });

  // show new state of the db
  dbo.collection("machines").find({}).toArray(function(err, res) {
    if (err) throw err;
    console.log(res[0]);
    db.close();
  });

});
