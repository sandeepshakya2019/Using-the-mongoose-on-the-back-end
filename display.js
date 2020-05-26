// Showing the data

// jshint esversion:6

// require the mongoose 
const mongoose = require('mongoose');
// connnet to mongoose and also make the database (name of tyhe database is "fruitsDB")
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser: true,useUnifiedTopology: true });
// use the model to view or display the data or find the data
//*********************************** Fruits ************************************************
//Making the schema of fruits
const fruitSchema = new mongoose.Schema({
	Name : String,
	Rating : Number,
	Review : String
});
//create a new collection
const Fruit = mongoose.model("Fruit",fruitSchema);
//*********************************** Fruits ************************************************
//Making a new schema of peoples
const peopleSchema = new mongoose.Schema({
	Name: String,
	Age: Number,
	Email: String
});
//create a new collection of the peoples
const People = mongoose.model("People",peopleSchema);
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

