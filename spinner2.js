//process.stdout.write('hello from spinner1.js... \rheyyy\n');
/*
setTimeout(() => {
  process.stdout.write('\r|  ');
},100);
setTimeout(() => {
  process.stdout.write('\r/  ');
},300);
setTimeout(() => {
  process.stdout.write('\r-  ');
},500);
setTimeout(() => {
  process.stdout.write('\r\\  ');
},700);
setTimeout(() => {
  process.stdout.write('\r|  ');
},900)
process.stdout.write('\n');
*/
let chars = "|/-\|"
let i = 0;
for (const char of chars) {
  setTimeout(function() {
    process.stdout.write('\r' + char + '  ' );
  },i + 1000 );
  i = i + 200;
};
