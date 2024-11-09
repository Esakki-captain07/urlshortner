import userModel from '../model/userModel.js'
import {hashPassword} from '../common/auth.js'


const createUser = async(req,res)=>{
try {
    let user = await userModel.findOne({email:req.body.email})
    if(!user){
        req.body.password = await hashPassword(req.body.password)
        await userModel.create(req.body)
        res.status(201).send({
            message:`user created successfull`
        })
    }else{
        res.status(401).send({
            message:`user already exsist this ${req.body.email}`
        })
    }
    
} catch (error) {
    console.log(error);
    res.status(500).send({
        message: error.message || 'Internal Server Error',
        error
    });
}
}

export default{
    createUser
}