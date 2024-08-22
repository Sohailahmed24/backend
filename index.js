
import express from "express"


const app=express()

app.get("/",(req,res)=>{
    res.send("server is ready")
})

app.get("/api",(req,res)=>{
    res.send({id:1,name:"api"})
})

const PORT= process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`port run on ${PORT}`)
})