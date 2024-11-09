import jwt from 'jsonwebtoken'
import 'dotenv/config.js'
import bcrypt from 'bcryptjs'
import userModel from '../model/userModel.js'


export const hashPassword = async(password)=>{
    try {
        let salt = await bcrypt.genSalt(Number(process.env.SALT))
        let hashedPassword = await bcrypt.hash(password,salt)
        return hashedPassword
    } catch (error) {
        throw error  
    }
}

export const hashCompare = async(password,hashedPassword)=>{
    try {
        return await bcrypt.compare(password,hashedPassword)
        
    } catch (error) {
        throw error   
    }
}

export const genrateToken = async(token)=>{
    try {
        
    } catch (error) {
        throw error
    }
}

export const validateToken = async()=>{
    try {
        
    } catch (error) {
        throw error
    }
}

