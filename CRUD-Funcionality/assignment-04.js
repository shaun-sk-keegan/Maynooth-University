//WRITE SOME CODE TO ESTABLISH A NODEJS CONNECTION WITH THE DATABASE 'cs230_u200186'
var	mysql	=	require('mysql');

//Create a connection between the database and node.js
var	con	=	mysql.createConnection({
		host:	"webcourse.cs.nuim.ie",
		user:	"u200186",
		password:	"Ohcukiu7Ahf0iet0",
		database:	"cs230_u200186"
});
//Connect the DB
con.connect(function(err)	{
		if	(err)	throw	err;
		console.log("Connected!");
});


//CRUD(CREATE, RETRIEVE, UPDATE, DELETE) FUNCTIONALITY

//----------CREATE----------

//Create the first table for personal info and connect it to the DB
var t1 = "CREATE TABLE Person (Title varchar(255), FName varchar(255) NOT NULL, Surname varchar(255) NOT NULL, Mobile varchar(255) NOT NULL, Email varchar(255) NOT NULL)";
con.query(t1, function(err, result){
	if(err) throw err
	console.log("Table 'Person' has been created");
})
//Create the second table for the person's home address and connect it to the DB
var t2 = "CREATE TABLE HomeAddress (AddressLn1 varchar(255) NOT NULL, AddressLn2 varchar(255), Town varchar(255) NOT NULL, County varchar(255) NOT NULL, Eircode varchar(255))";
con.query(t2, function(err, result){
	if(err) throw err
	console.log("Table 'HomeAddress' has been created");
})
//Create the third table for the person's shipping address and connect it to the DB
var t3 = "CREATE TABLE ShippingAddress (AddressLn1 varchar(255) NOT NULL, AddressLn2 varchar(255), Town varchar(255) NOT NULL, County varchar(255) NOT NULL, Eircode varchar(255))";
con.query(t3, function(err, result){
	if(err) throw err
	console.log("Table 'ShippingAddress' has been created");
})


//Insert the sample data into the tables
var p1 = "INSERT INTO Person (Title, FName, Surname, Mobile, Email) VALUES ('Mr', 'Shaun', 'Keegan', '0871234567', 'shaun@mail.com');";
con.query(p1, function(err,result)
    {
        if(err) throw err
        console.log("Added person into database");
    });
var p1 = "INSERT INTO HomeAddress (AddressLn1, AddressLn2, Town, County, Eircode) VALUES (42', 'Lucan', 'Road', 'Lucan', 'Dublin', 'K78X123');";
con.query(p1, function(err,result)
	{
		if(err) throw err
		console.log("Added home address into database");
	});
var p1 = "INSERT INTO ShippingAddress (AddressLn1, AddressLn2, Town, County, Eircode) VALUES (42', 'Lucan', 'Road', 'Lucan', 'Dublin', 'K78X123');";
con.query(p1, function(err,result)
	{
		if(err) throw err
		console.log("Added shipping address into database");
	});


//----------RETRIEVE----------
var p1 = "SELECT * FROM Person WHERE Title = 'Mr' ";
con.query(p1, function(err, result)
{
	if (err) throw err;
	console.log(result);
});


//----------UPDATE----------
var p1 = "UPDATE Person SET Mobile = '0837654321' WHERE Mobile = '0871234567';";
con.query(p1, function(err, update)
{
	if(err) throw err;
	console.log("Mobile has been updated");
});

//----------DELETE----------
var p1 = "DELETE FROM Person WHERE Fname = 'Shaun';"
con.query(p1, function(err, update)
{
	if(err) throw err;
	console.log("Person has been deleted");
});


