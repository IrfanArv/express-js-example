import db from '../../models/index.js'

const Category = db.Category

export async function create(req, res) {
    try {
        const { name, desc } = req.body
        await Category.create({ name, desc })

        return res.status(201).send({
            statusCode: 201,
            success: true,
            message: 'Category created',
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
            attributes: ['id', 'name', 'desc'],
            where: {
                isActive: true,
            },
            raw: true,
        })
        return res.status(200).send({
            statusCode: 200,
            success: true,
            message: `${
                getData.length !== 0
                    ? 'Data berhasil diambil'
                    : 'Tidak ada data'
            }`,
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

export async function findByid(req, res) {
    try {
        const id = req.params.id

        const getData = await Category.findByPk(id, {
            attributes: ['name', 'desc'],
            where: {
                isActive: true,
            },
            // return with id
            raw: true,
        })

        if (!getData) {
            return res.status(404).send({
                statusCode: 404,
                success: false,
                message: 'Data tidak ditemukan, periksa kembali ID nya',
            })
        }

        return res.status(200).send({
            statusCode: 200,
            success: true,
            message: 'Data berhasil diambil',
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
