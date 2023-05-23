import swaggerJsdoc from 'swagger-jsdoc'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

const { PORT } = process.env

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Docs Example',
            version: '1.0.0',
            description: 'API documentation',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },
        ],
    },
    apis: [path.resolve(__dirname, './routes/*.js')],
}

const specs = swaggerJsdoc(options)

export default specs
