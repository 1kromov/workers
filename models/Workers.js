const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Department = require ("./Department")

const workerSchema = new Schema({
    name:{type:String,
        required: true,
        trim: true,
        upperCase: true,
},
    last_name : {
        type: String,
        required : true,
},
    age: {
        type: Number,
        min: [18, "Qaqon katta bolasan"],
        max: [55, "Oz qobtiku a"],
  },
  salary : {
    type : Number,
},
    department_id:{
        type: Schema.Types.ObjectId,
        required : true,
        ref:"Department",
        },
        subdepartment:Department.schema,
        departments:[Department.schema],
})

module.exports = mongoose.model("Worker",workerSchema);