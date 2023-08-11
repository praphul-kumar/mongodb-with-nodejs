const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: String,
    designation: String,
    email: {
        type: String,
        unique: true,
    },
    phone: String,
    age: Number
}, {timestamps: true});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
