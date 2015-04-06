var fs = require('fs')
var path = require('path')

module.exports = function(dir, ext, callback) {
  ext = '.' + ext
  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return path.extname(file) === ext
    })
    // list.forEach(function (file) {
    //   if (ext == path.extname(file))
    //     arr.push(file)
    // })

    callback(null, list)
  })
}
