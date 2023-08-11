const Employee = require('../models/Employee');


// Show the list of Employees
const index = (req, res, next) => {
    Employee.find()
    .then(response => {
        res.json({
            response
        })
    }).catch(error => {
        res.json({
            message: error.message
        });
    });
}

const show = (req, res, next) => {
    let employeeId = req.body.employeeId;
    Employee.findById(employeeId)
    .then(response => {
        res.json({
            response
        });
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    });
}

const store = (req, res, next) => {
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    });

    employee.save()
    .then(response => {
        res.json({
            message: 'Employee Added Successfully!!'
        })
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    });
}


const update = (req, res, next) => {
    let employeeId = req.body.employeeId;

    let updateData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    };

    Employee.findByIdAndUpdate(employeeId, {$set: updateData})
    .then(() => {
        res.json({
            message: "Employee Updated Successfully!!"
        })
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    });
}

const destroy = (req, res, next) => {
    let employeeId = req.body.employeeId;

    Employee.findByIdAndRemove(employeeId)
    .then(() => {
        res.json({
            message: 'Employee Removed Successfully!!'
        })
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    });
}

module.exports = {
    index, show, store, update, destroy
}