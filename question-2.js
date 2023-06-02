const {readFile, writeFile} = require('fs');	// imports readFile and writeFile functions from fs 
console.log('start');	//prints start to the console
readFile('./content/first.txt','utf8', (err, result)=> {	// use imported readFile function and encode data from first.txt using utf-8
   if (err) {	// conditional, if there is an error, log the error to the console
       console.log(err);
       return 
   }
   const first = result;	// Upon successful completion store the result of this first readFile function to the first variable
   console.log(result);	// log the result to the console
   readFile('./content/second.txt','utf8', (err, result)=> {
       if (err) {
           console.log(err);
           return 
       }
       const second = result;	// Upon successful completion store the result of this second readFile function to the second variable
       console.log(result);	// log the result to the console
       writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`,(err, result) => {	// use imported function to rite first and second results to the result-async text file
           if (err) {
               console.log(err);	//if there is an error, log the error to the console
               return 
           }
           console.log('done with the task');	// once writFile function is complete, print done with the task to the console
       }
       );
	})
});


console.log('starting next task');  // print starting next task to console

// CONSOLE OUTPUT
// start
// starting new task
// Hello, I am the first file
// Hello, I am the second file
// Here is the result: Hello, I am the first file, Hello, I am the second file
// done with the task