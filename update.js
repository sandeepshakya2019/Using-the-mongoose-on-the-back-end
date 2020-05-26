// updating the data

// jshint esversion:6
// require the mongoose 
const mongoose = require('mongoose');
// connnet to mongoose and also make the database (name of tyhe database is "fruitsDB")
mongoose.connect("mongodb://localhost:27017/validateDB",{useNewUrlParser: true,useUnifiedTopology: true });
//******************************** Making the model ************************************************
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

//************************ Updating the data ***********************************
// model.updateOne({use to check},{to what the update},function(){return any err if present})
Fruit.updateOne({ _id : "5ecda1448f12922fac45d638"},{Name:"Apple"},function(err){
	if (err){
		console.log(err)
	}else{
		mongoose.connection.close();
		console.log("Success");
	}
})