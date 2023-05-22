import { body, param, query, validationResult } from 'express-validator'

export const validateName = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage('Nama tidak boleh kosong')
        .isLength({ min: 3 })
        .withMessage('Nama harus memiliki panjang minimal 3 karakter'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                statusCode: 400,
                message: 'Bad request',
                errors: errors.array(),
            })
        }
        next()
    },
]

export const validateId = [
    param('id').notEmpty().isUUID().withMessage('Invalid ID'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({
                    statusCode: 400,
                    message: 'Bad request',
                    errors: errors.array(),
                })
        }
        next()
    },
]
