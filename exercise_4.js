var fs = require('fs');

// var buf = fs.readFileSync(process.argv[2]);
// var str = buf.toString();
// var count_no_lines = str.split('\n').length;
// console.log(count_no_lines);

fs.readFile(process.argv[2], 'utf8', function (err, data) {
  if (err) throw err
  data = data.split('\n').length - 1
  console.log(data)
});


// Here's the official solution in case you want to compare notes:
//     var fs = require('fs')
//     var file = process.argv[2]
//
//     fs.readFile(file, function (err, contents) {
//       // fs.readFile(file, 'utf8', callback) can also be used
//       var lines = contents.toString().split('\n').length - 1
//       console.log(lines)
//     })
