import db from '../../models/index.js'

const Category = db.Category

export async function create(req, res) {
    try {
        const { name, desc } = req.body
        await Category.create({ name, desc })

        return res.status(201).send({
            statusCode: 201,
            success: true,
            message: 'Category created successfully',
        })
    } catch (err) {
        return res.status(400).send({
            statusCode: 400,
            success: false,
            message: 'Bad Request',
            data: {
                errors: err.message,
            },
        })
    }
}

export async function findAll(req, res) {
    try {
        const getData = await Category.findAll({
            where: {
                isActive: true,
            },
            raw: true,
        })
        return res.status(200).send({
            statusCode: 200,
            success: true,
            message: `${getData.length !== 0 ? 'Success' : 'Data empty'}`,
            data: getData,
        })
    } catch (err) {
        return res.status(400).send({
            statusCode: 400,
            success: false,
            message: 'Bad Request',
            data: {
                errors: err.message,
            },
        })
    }
}

export async function findOne(req, res) {
    try {
        const getData = await isCategory(req.params.id)

        if (!getData) {
            return res.status(404).send({
                statusCode: 404,
                success: false,
                message: 'Mismatch ID',
            })
        }

        return res.status(200).send({
            statusCode: 200,
            success: true,
            message: 'Success',
            data: getData,
        })
    } catch (err) {
        return res.status(400).send({
            statusCode: 400,
            success: false,
            message: 'Bad Request',
            data: {
                errors: err.message,
            },
        })
    }
}

export async function updateData(req, res) {
    try {
        const id = req.params.id
        const getData = await isCategory(id)

        if (!getData) {
            return res.status(404).send({
                statusCode: 404,
                success: false,
                message: 'Mismatch ID',
            })
        }

        const { name, desc, isActive } = req.body

        const [updatedRowCount] = await Category.update(
            { name, desc, isActive },
            { where: { id } },
        )

        if (updatedRowCount === 1) {
            return res.status(200).send({
                statusCode: 200,
                success: true,
                message: 'Data updated successfully',
            })
        }
    } catch (err) {
        return res.status(400).send({
            statusCode: 400,
            success: false,
            message: 'Failed to update data',
            data: {
                errors: err.message,
            },
        })
    }
}

export async function deleteData(req, res) {
    try {
        const id = req.params.id
        const getData = await isCategory(id)

        if (!getData) {
            return res.status(404).send({
                statusCode: 404,
                success: false,
                message: 'Mismatch ID',
            })
        }

        await Category.destroy({
            where: {
                id: id,
            },
        })

        return res.status(200).send({
            statusCode: 200,
            success: true,
            message: 'Data deleted successfully',
        })
    } catch (err) {
        return res.status(400).send({
            statusCode: 400,
            success: false,
            message: 'Bad Request',
            data: {
                errors: err.message,
            },
        })
    }
}

export async function isCategory(id) {
    const existingData = await Category.findByPk(id, {
        where: {
            isActive: true,
        },
        raw: true,
    })

    return existingData
}
