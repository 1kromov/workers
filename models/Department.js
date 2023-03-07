const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
    name:{type:String,
        required: true,
        trim: true,
        upperCase: true,
},
    info : {
        type: String,
        required : true,
},
});

module.exports = mongoose.model("Department",departmentSchema);