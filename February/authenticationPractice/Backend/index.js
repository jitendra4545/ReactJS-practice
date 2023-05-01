
const express = require(`express`)
const { UserModel } = require("./model/UserModel")
const {connection}=require('./config/db')
const app = express()
const jwt=require('jsonwebtoken')
const cors=require('cors')
app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
    res.send("Welcome to HomePage")
})

app.post("/login", async (req, res) => {
    
      let data=req.body
      console.log(data)
      try{
         let newData=await UserModel.find({email:data.email,password:data.password})
         if(newData.length>0){
          let token=jwt.sign({masai:"school"},"web19")
          res.send(`User Login Success  token ${token}`)
         }else{
          res.send('user login failed')
         }
       
      }catch(err){
  
      }
})

app.post("/register", async (req, res) => {
    const data=req.body
    console.log(data)
    try { 
        let newData=new UserModel(data)
    await newData.save()
      res.send("Data added successfully")
    } catch (err) { console.log(err) }
})


app.listen(8000, async() => {
    
    try{
        await connection
        console.log('server connected')
    }catch(er){
        console.log(er)
    }
    console.log('server running on port 8000')
})