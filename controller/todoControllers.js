import todoModel from "../models/todoModels.js";

class todo{
    static todo = (req,res)=>{
        res.render("todo");
    }
    static task = (req,res)=>{
        res.render("task",{
            title:"tasks"
        })
    }
    static show = (req,res)=>{
        res.render("show")
    }

    static createTask = async (req,res)=>{
        try{
            const {name,Task} = req.body;
            const doc = new todoModel({
                name,
                Task,
            })
         const result =    await doc.save();
        //  console.log(result)
         res.redirect("/todo/tasks");
        }

        catch(err){
            console.log(err);
        }

    }
    static getAllDoc = async (req,res)=>{
        try{
            const result = await todoModel.find();
            res.render("show",{data:result});
            // console.log(data)
        }
        catch(err){
            console.log(err);
        }
    }
    static updateDoc = async (req,res)=>{
      try{  
       const result = await todoModel.findById(req.params.id)
        
        res.render('update',{data:result})
      }
      catch(err){
        console.log(err);
      } 
        
    }
    static updateDocById = async (req,res)=>{
      try{
        const result = await todoModel.findByIdAndUpdate(req.params.id,req.body)
        res.redirect("/");
      }  
      catch(err){
        console.log(err)
      }
    }
    static deleteDocById = async (req,res)=>{
        try{
            const result = await todoModel.findByIdAndDelete(req.params.id);
            res.render('/shows',{data:result})
            res.redirect('/todo/tasks');
        }
        catch(err){
            console.log(err)
        }
    }
   
}
export default todo;