// 7-multi_c.js
const count = parseInt(process.argv[2]);

if (isNaN(count)) {
  console.log('Missing number of occurrences');
} else {
  console.log(`Correct output - ${count} times`);
  for (let i = 0; i < count; i++) {
    console.log('C is fun');
  }
}
