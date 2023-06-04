var mysql=require('mysql');		// importing the mysql package
var connection=mysql.createConnection({	// creating a mysql object stored in the variable connection
  host:'localhost',	// set name of host to local host
  user:'your username',	// set username
  password:'your password',	// set password
  database:'your database name'	//set name of host
});
connection.connect(function(error){	//starts the connection to sql
  if(!!error){	// if there is an error, log the error to the console
    console.log(error);
  }else{
    console.log('Connected!:)');	// If the connection is successful, log 'Connected:' to the console
  }
}); 
module.exports = connection;	//exporting connection module
