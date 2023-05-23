import { Router } from 'express'
import {
    create,
    findAll,
    findOne,
    updateData,
    deleteData,
} from '../controllers/category/index.js'
import {
    validateName,
    validateId,
} from '../middlewares/validation.middleware.js'
const categoryRoutes = Router()

categoryRoutes.post('/category', validateName, create)
categoryRoutes.get('/category', findAll)
categoryRoutes.get('/category/:id', validateId, findOne)
categoryRoutes.patch('/category/:id', validateId, updateData)
categoryRoutes.delete('/category/:id', validateId, deleteData)

export default categoryRoutes
