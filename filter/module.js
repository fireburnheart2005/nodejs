/*-------Show file name by load name from category with param is extension of file ---*/
/*------- Using node module.js ../filter js -------------------------*/
var filterFn = require('./filter.js')
var dir = process.argv[2] // path folder 
var filterStr = process.argv[3] //extension of file as js,txt...

filterFn(dir, filterStr, function (err, list) {
	
  if (err)
    return console.error('There was an error:', err)

  list.forEach(function (file) {
    console.log(file)
  })
})