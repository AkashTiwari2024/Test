//Question1. Write a program to create a file example.txt in which you need to write your name and then print the content of that file.
const fs = require('fs');

const fileName = 'example.txt';

const name = 'Akash Tiwari';
fs.writeFile(fileName, name, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
       
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }
        console.log('Content of the file:', data);
    });
});



//Question 2. Write a program to print "Hello, World!" to the console after 2 seconds using setTimeout.
setTimeout(function () {
  console.log('Hello World!');
}, 2000);

//Question 3. Write a function that starts logging "Hello" to the console every second. After 5 seconds, stop the interval and log "Done!" once.

let count = 1; 
let maxCount = 6; 


let myCountInterval = setInterval(function () {
  console.log('Hello ');

  
  if (count >= maxCount) {
    clearInterval(myCountInterval); 
    console.log('Done!'); 
  }

  count++; 
}, 1000);

//Question 4. Write a program using readLine where you need to ask name, program name, course name and age from user and then print the 
// entire message.

const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('First Name: ', function (fName) {
  rl.question('Program Name: ', function (pName) {
    rl.question('Course Name: ', function (cName) {
     rl.question('Age: ', function (Age) {
  
      
      console.log('Hello: ' + fName + ' ' + pName + ' ' + cName + ' ' + Age);
        rl.close();
    });
  });
});
});

