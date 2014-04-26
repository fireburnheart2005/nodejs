var mongojs = require('mongojs');
var format = require('util').format;

var connection_string = "mongodb://root:root@oceanic.mongohq.com:10085/mongo";
var db = mongojs(connection_string, ['books']);
for(i=0;i<10000;i++)
db.books.save({n:i},function(err, saved) {
  if( err || !saved ) console.log("User not saved");
  else console.log("User saved");
});
