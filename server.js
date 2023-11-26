const express = require('express')
const mongoose = require ('mongoose')
const app = express()
const Student = require('./models/studentmodel')
app.use(express.json())

app.get('/students', async(req, res) => {
    try{
        const students = await Student.find({});
        res.status(200).json(students);
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

//search by id
app.get('/students/:id' ,async(req,res) =>{
    try {
        const {id} =req.params;
        const student = await Student.findById(id);
        res.status(200).json(student);
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

//create student
app.post('/student', async(req, res) => {
    try{
        const student = await Student.create(req.body)
        res.status(200).json(student);
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//update data
app.put('/students/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const student = await Student.findByIdAndUpdate(id, req.body);
        if(!student){
            return res.status(404).json({message : 'No student with such Id'})
        }
        const updatedStudent = await Student.findById(id);
        res.status(200).json(updatedStudent);
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

//deleting data 
app.delete('/students/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const student = await Student.findByIdAndDelete(id);
        if(!student){
            return res.status(404).json({message : 'No student with such Id'})
        }
        res.status(200).json(student);
    }catch(error){
        res.status(500).json({message: error.message})
    }
})



mongoose.connect('mongodb+srv://kalyanib:kalyani10@cluster0.ftcrh3a.mongodb.net/studentdb?retryWrites=true&w=majority')
.then(() => { app.listen(3000, () => {
    console.log('App is running')
})
    console.log('connected to db')
    }).catch((error) => {
        console.log(error)
    })
