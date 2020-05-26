// jshint esversion:6

// require the mongoose 
const mongoose = require('mongoose');
// connnet to mongoose and also make the database (name of tyhe database is "fruitsDB")
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser: true,useUnifiedTopology: true });
/*
Steps to be perform to enter the document structure

	1) Making the schema by using "new mongoose.schema"
	2) Make the model from the schema or crating a new collections
	3) Then enter the first data using the schema
	4) before finding or viewing the data make sure you have comment out the function of insertMany and the .save methods otherwise it enter the more data
		of same names
	5) run the app in terminal node app.js
	6) We are also going to peroform the methoda and property of object and arrays on the data
	7) use mongoose.connnection.close() to close the connection automatically.... that a good practice you have to perform in the last you will automatically
	  	recognized what this does........
	8) we are dividing the files to save and the find or diaplay the data enter.js is to enter the data and the display.js is for viewing the data

*/

//Making the schema of fruits
const fruitSchema = new mongoose.Schema({
	Name : String,
	Rating : Number,
	Review : String
});
//create a new collection
const Fruit = mongoose.model("Fruit",fruitSchema);
//Making a new schema of peoples
const peopleSchema = new mongoose.Schema({
	Name: String,
	Age: Number,
	Email: String
});
//create a new collection of the peoples
const People = mongoose.model("People",peopleSchema);
//************************************************************
//For the fruits schema we entre the data (4 data)

//first data
const fruit = new Fruit ({
	Name:"Strawberry",
	Rating:7,
	Review:"Having a decent taste"
})
//enter more fruits
const kiwi = new Fruit({
	Name:"KIWI",
	Rating :9,
	Review:"Good Fruit. it's having a good taste"
})
const banana = new Fruit({
	Name:"Banana",
	Rating :10,
	Review:"Healthier Fruit increse the weight also"
})
const orange = new Fruit({
	Name:"Orange",
	Rating :8,
	Review:"Sour Fruit but increse the immunity system"
})

//saving the Fruit
fruit.save();
// we are entering the many daya using the insertMany 

Fruit.insertMany([kiwi,banana,orange],function(err){
	if (err){
		console.log(error)
	}else{
		//console.log("Fruits Data Succesfully Entered ......");
	}
})

//********************************************************************
// data for the peoples collections (3 data)
//first data
const people = new People ({
	Name:"people1_name",
	Age:28,
	Email:"people1_name@gmail.com"
});
people.save();
// more data on peoples collection
const people1 = new People ({
	Name:"people2_name",
	Age:20,
	Email:"people2_name@gmail.com"
});
const people2 = new People ({
	Name:"people3_name",
	Age:23,
	Email:"people3_name@gmail.com"
});

People.insertMany([people1,people2],function(err){
	if (err){
		console.log(error)
	}else{
		mongoose.connection.close();
		//console.log("People Data Succesfully Entered ......");
	}
})

/*

//**************************** viewing the data *********************************************

// Methods to view the data
Fruit.find(function(err,fruits){
	if (err){
		console.log(err)
	}else{
		console.log(fruits);
	}
})

//People collections
//console.log("Viewing the data of the peoples collection");
People.find(function(err,people){
	if (err){
		console.log(err)
	}else{
		console.log(people);
	}
})

// using the property and methoda of the array and objects
Fruit.find(function(err,fruits){
	if (err){
		console.log(err)
	}else{
		//console.log(fruits)
		console.log(" ");
		console.log("Fruits Names");
		fruits.forEach(function(fruit){
			console.log("- "+fruit.Name)
		})
	}
})
People.find(function(err,peoples){
	if (err){
		console.log(err)
	}else{
		//console.log(people)
		console.log(" ");
		console.log("Peoples name");
		mongoose.connection.close();
		peoples.forEach(function(people){
			console.log("- "+people.Name)
		})
	}
})

*/