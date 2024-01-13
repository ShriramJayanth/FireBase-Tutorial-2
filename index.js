import express from "express";
import cors from "cors";
import User from "./User.js";

const app=express();
app.use(express.json());
app.use(cors());

app.get("/",async(req,res)=>{
    const data=await User.get();
    const list=data.docs.map((doc)=>({id:doc.id,...doc.data()}));
    res.status(201).json(list);
})

app.post("/create",async(req,res)=>{
    const data=req.body;
    console.log("Data: ",data);
    await User.add(data);
    res.status(201).json({msg:"User Added"});
})

app.post("/delete",async(req,res)=>{
    const Id=req.body.id;
    await User.doc(Id).delete();
    res.status(201).json({msg:"User Deleted"});
})

app.post("/update",async(req,res)=>{
   const Id=req.body.id;
   delete req.body.id;
   const data=req.body;
   await User.doc(Id).update(data);
   res.status(201).json({msg:"Updated"});
})

app.listen(4000,()=>{
    console.log("Server Started on port 4000");
})