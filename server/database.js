const bycrypt = require("bcryptjs")
require("dotenv").config();
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI,{  useNewUrlParser: true,
useUnifiedTopology: true})
.then((done)=>{
    console.log('connected..')
})
.catch((e)=>{
    console.log(e);
})

const mongooseSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})

//hasing password..

mongooseSchema.pre('save', async function(next){
   if(this.isModified('password')){
    this.password = await bycrypt.hash(this.password,12)
    this.confirmpassword = await bycrypt.hash(this.confirmpassword,12);
   }
   next();
})

//generating token..
mongooseSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token:token})
        this.save();
        return token;
    }catch(e){
        console.log(e);
    }
}

const mongooseModel = new mongoose.model('advnode',mongooseSchema)
module.exports = mongooseModel;