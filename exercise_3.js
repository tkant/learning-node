var fs = require('fs');

var buf = fs.readFileSync('test.txt');
var str = buf.toString();
var count_no_lines = str.split('\n').length;
console.log(count_no_lines);
