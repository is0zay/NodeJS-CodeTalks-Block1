const {readFileSync, writeFileSync} = require('fs');		//Import filesystem module to read and write files




const fs = require('fs');		// set fs variable to represent fs instance


const first = readFileSync('./content/first.txt','utf8');	// set first variable to content of first.txt, converting it to english with utf-8
const second = readFileSync('./content/second.txt','utf8');	// set second variable to content of second.txt, converting it to english with utf-8


console.log(first, second);		// logs the content from the first text file and the sencond text file


writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`); // write content form first and second text file to the result-sync text file. If the result-sync file did not previously exist, this command also creates the file


writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`,{flag: 'a'}); 	//this line writes to the end of the result-sync text file. By using {flag: 'a'} it ensures the code is added to the file and it doesnt overwrite the file



// Current status of result-sync.txt
// Here is the result :  “Hello, I am the first file.” ,  “Hello, I am the second file.”
// Here is the result :  “Hello, I am the first file.”,  “Hello, I am the second file.”
