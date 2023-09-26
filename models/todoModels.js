import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    name:{type:String, required:true},
    Task:{type:String,required:true},
    // Day:{type:Date.toString(),required:true},

})

const todoModel =  mongoose.model("task",todoSchema)

export default todoModel;