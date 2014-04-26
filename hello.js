/*var argv = require('optimist').argv;
console.log(argv.a)
console.log(argv.b)*/
/*----------Filte list ls ------------*/
/*-- using: node hello.js --path=node_modules/optimist --ext=js --*/
var argv = require('optimist').argv
var fs = require('fs')
var path = require('path')

fs.readdir(argv.path, function (err, list) {
	console.log(err)
  list.forEach(function (file) {
    if (path.extname(file) === '.' + argv.ext)
      console.log(file)
  })
})
/*------------ End show file name ----------------*/