var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  // this is an optional filter on the returned results
  // dbo.collection("customers").find({},
  //   { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
  dbo.collection("recipes").find({}).toArray(function(err, result) {
  // dbo.collection("machines").find({name:'f91dc3e8cfa484a6d37911d951ac0a72'}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    // console.log(result[0].data.last_brew_log);
    // console.log(result[0]._id); // returns just the id
    db.close();
  });
});
