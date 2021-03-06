var mongoose = require("mongoose");

var InternshipSchema = new mongoose.Schema({
	cName: String,
	Package: String,
	internLocation: String,
	duration: String,
	qualification: String,
	department: String,
	skills: String,
	designation: String,
	interviewLocation: String,
	lastDate: String,
	eligibility: String,
	internDescription: String, 
	doc_links: [String],
	author: {
	    type: mongoose.Schema.Types.ObjectId,
	    ref: "User"
	},
	registeredStudents: [{
	    type: mongoose.Schema.Types.ObjectId,
	    ref: "User"
	}],
	selectedStudents: [{
	    type: mongoose.Schema.Types.ObjectId,
	    ref: "User"
	}]
});

module.exports = mongoose.model("internship", InternshipSchema);