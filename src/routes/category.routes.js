import { Router } from 'express'
import {
    create,
    findAll,
    findByid,
    updateByid,
} from '../controllers/category/index.js'
import {
    validateName,
    validateId,
} from '../middlewares/validation.middleware.js'
const categoryRoutes = Router()

categoryRoutes.post('/category', validateName, create)
categoryRoutes.get('/category', findAll)
categoryRoutes.get('/category/:id', validateId, findByid)

export default categoryRoutes
