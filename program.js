var i = 2;
var sum = 0;
for(i; i < process.argv.length; i++) {
  sum += Number(process.argv[i]);
}
console.log(sum);
