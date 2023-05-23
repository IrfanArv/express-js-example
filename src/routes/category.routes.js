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

/**
 * @swagger
 * /category:
 *   post:
 *     summary: Create a new category
 *     tags:
 *       - Category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CategoryInput'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
categoryRoutes.post('/', validateName, create)

/**
 * @swagger
 * /category:
 *   get:
 *     summary: Get all categories
 *     tags:
 *       - Category
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 *       500:
 *         description: Internal server error
 */
categoryRoutes.get('/', findAll)

/**
 * @swagger
 * /category/{id}:
 *   get:
 *     summary: Get a category by ID
 *     tags:
 *       - Category
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Category ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Category not found
 *       500:
 *         description: Internal server error
 */
categoryRoutes.get('/:id', validateId, findOne)

/**
 * @swagger
 * /category/{id}:
 *   patch:
 *     summary: Update a category by ID
 *     tags:
 *       - Category
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Category ID
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CategoryInput'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Category not found
 *       500:
 *         description: Internal server error
 */
categoryRoutes.patch('/:id', validateId, updateData)

/**
 * @swagger
 * /category/{id}:
 *   delete:
 *     summary: Delete a category by ID
 *     tags:
 *       - Category
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Category ID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad request
 *       404:
 *         description: Category not found
 *       500:
 *         description: Internal server error
 */
categoryRoutes.delete('/:id', validateId, deleteData)

export default categoryRoutes
