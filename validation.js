// Validating the data

// jshint esversion:6

// require the mongoose 
const mongoose = require('mongoose');
// connnet to mongoose and also make the database (name of tyhe database is "fruitsDB")
mongoose.connect("mongodb://localhost:27017/validateDB",{useNewUrlParser: true,useUnifiedTopology: true });
// use the model to view or display the data or find the data
//*********************************** Fruits ************************************************
//Making the schema of fruits
const fruitSchema = new mongoose.Schema({
	Name : {
		type:String,
		required:[true,"Please Add the Name"]
	},
	Rating : {
		type:Number,
		min: 0,
		max : 10
	},
	Review : String
});
//create a new collection
const Fruit = mongoose.model("Fruit",fruitSchema);
//*********************************** Fruits ************************************************
//Making a new schema of peoples
// validation of email
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
// making a schema 
const peopleSchema = new mongoose.Schema({
	Name : {
		type:String,
		required:[true,"Please Add the Name"]
	},
	Rating : {
		type:Number,
		min: 0,
		max : 10
	},
	Age: Number,
	Email: {
		type:String,
		required:[true,"Please Add the Email"],
		lowercase: true,
		validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
	}
});
//create a new collection of the peoples
const People = mongoose.model("People",peopleSchema);
// enter the data
const fruit = new Fruit ({
	Name:"Fruits_name",
	Rating:7,
	Review:"given_review"
})
fruit.save();
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

// we are entering the many daya using the insertMany 

Fruit.insertMany([kiwi,banana,orange],function(err){
	if (err){
		console.log(error)
	}else{
		//console.log("Fruits Data Succesfully Entered ......");
	}
})
const people = new People ({
	Name:"people1_name",
	Age:28,
	Email:"people1_name@gmail.com"
});
people.save()
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

//**************************** Validating the data *********************************************

