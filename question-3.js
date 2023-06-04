


const getTodos = () => {	//  set a variable named geTodos equal to an arrow function
	const request = new XMLHttpRequest();	// set variable named request to represent XMLHttpRequest instance, XMLHttp used to retrieve data from url
   
   
   request.addEventListener('readystatechange', ()=>{		// add event listener that waits for state change in order to invoke function
   
   
	if(request.readyState === 4 && request.status === 200){		// 4 represents DONE state. If readyState is a 4 and status is a 200, print the request to the console
	  console.log(request.responseText)
	   }
	  else if (request.readyState === 4){	//else if the state is 4 but the status is not 200, log the message "could not fetch the data"
		console.log('could not fetch the data');
	  }
   });
   
   
   request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');		// GET method to grab data from the url, changes readyState to 1
   request.send();															// Request sent to the server, changes readyState to 2
   }
   
   
   
   
   getTodos();	// function called and data is printed to the console twice
   getTodos();