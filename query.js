var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// queries are passe into find and similar methods as search terms.
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { address: "Park Lane 38" };
    // var query = { address: /^S/ }; // you can use a regex like this.
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
