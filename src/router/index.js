import { Router } from "express";
import userRoutes from './user.js'
import urlShortner from "./urlShortner.js";


const routes = Router()

routes.get('/',(req,res)=>{
res.status(200).send({
    message:`<div>
                <h1>BlogApp Backend</h1>
            </div>`
})
})

routes.use('/user',userRoutes)
routes.use('/',urlShortner)
export default routes