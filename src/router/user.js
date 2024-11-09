import {Router} from 'express'
import userService from '../service/userService.js'

const routes = Router()

routes.post('/',userService.createUser)

export default routes