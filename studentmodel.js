const mongoose = require('mongoose')

const studentSchema = mongoose.Schema(
    {
        rollno: {
            type : Number,
            required : [true, "please enter roll number"]
        },
        name : {
            type : String,
            required : true
        },
        marks : {
            type :Number,
            required : true
        },
        subject : {
            type : String,
            required : true
        }
    },
    {
        timestamps : true
    }
)

const student = mongoose.model('Student', studentSchema);

module.exports = student;