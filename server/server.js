const express = require('express');
const bodyParser = require("body-parser")
const jwt = require('jsonwebtoken')
const path = require('path');
const auth = require('./middleware/auth')
const mongooseModel = require('./database')
const multer = require('multer');
const cookieParser = require('cookie-parser')
const bycrypt = require("bcryptjs")
const cors = require('cors');
require('dotenv').config();
const dotenv = require('dotenv');
dotenv.config({path: './.env'})
const app = express();
app.use(bodyParser.json());
const corsOptions = {
    origin:true,
    credentials:true
};
app.use(cors(corsOptions));
app.use(cookieParser())
app.use('/uploads',express.static('./uploads'))
const PORT = process.env.PORT || 4000
app.listen(PORT);
console.log(`Im listening at PORT ${PORT}`);



app.post('/signup', async(req,res)=>{
    const {fullname,phone,email,password,confirmpassword} = req.body;
    if(!fullname || !phone || !email || !password || !confirmpassword){
        return res.status(401).json({error:"please fill all the inputs!"})
    }else{
        try{
            const userexists = await mongooseModel.findOne({email:email})
            if(!userexists){
                const savedata  = new mongooseModel({fullname,phone,email,password,confirmpassword});
                const printData = await savedata.save();
                console.log(printData);
                res.status(201).send('success signup')
            }else{
                res.status(401).json({error:"userexists"})
            }
        }catch(e){
            console.log(e);
            res.status(401).json(e)
        }
    }
})


app.post('/login', async(req,res)=>{
    const {email,password} = req.body;
    if( !email || !password){
        return res.status(401).json({error:"please fill all the inputs!"})
    }else{
        try{
            const userexists = await mongooseModel.findOne({email:email})
            if(userexists){
                const isMatch = await bycrypt.compare(password,userexists.password);
                if(isMatch){
                    const token = await userexists.generateAuthToken();
                    console.log(token);
                    res.cookie('jwtokenn',token,{
                        expires:new Date(Date.now() + 25892000000),
                        httpOnly:true
                    })
                    res.status(201).send('success login')
                }else{
                    res.status(401).json({error:"failed password"})
                }
            }else{
                res.status(401).json({error:"failed login"})
            }
        }catch(e){
            console.log(e);
            res.status(401).json(e)
        }
    }
})
app.delete('/dd',async(req,res)=>{
    const dele = await mongooseModel.deleteMany({});
    res.status(201).json(dele);
 })
app.get('/homes',auth,(req,res)=>{
    res.status(201).send(req.rootUser)
})


////production stage
if(process.env.NODE_ENV ==="production"){
    app.use(express.static(path.join(__dirname,"../blogs/build")));
   app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../blogs','build','index.html'));
   })
}
