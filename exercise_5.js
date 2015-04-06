var fs = require('fs')
var path = require('path')

var ext = process.argv[3]
ext = '.' + ext
fs.readdir(process.argv[2], function (err, data) {
  data.forEach(function (file) {
    if (ext == path.extname(file))
      console.log(file)
  })
})

// Official solution

 // var fs = require('fs')
 // var path = require('path')
 //
 // fs.readdir(process.argv[2], function (err, list) {
 //   list.forEach(function (file) {
 //     if (path.extname(file) === '.' + process.argv[3])
 //       console.log(file)
 //   })
 // })
