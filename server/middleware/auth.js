const jwt = require('jsonwebtoken')
const mongooseModel = require('../database')

const auth = async(req,res,next)=>{
    try{
        const token = req.cookies.jwtokenn;
        const verifytoken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await mongooseModel.findOne({_id:verifytoken._id, "tokens.token":token})
        if(!rootUser){throw new Error ("User not found!")}
            req.token = token;
            req.rootUser = rootUser;
            req.userID = rootUser._id
            next();
    }catch(e){
        console.log(e);
        res.status(401).json("error in middleware")
    }
}

module.exports = auth