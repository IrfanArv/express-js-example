import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import logger from 'morgan'
import swaggerUi from 'swagger-ui-express'
import routes from './routes/index.routes.js'
import specs from './config/swaggerConfig.js'

dotenv.config()
const app = express()
const port = process.env.PORT

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposedHeaders: ['x-auth-token'],
}

const main = async () => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
    app.use(logger('dev'))
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        )
        next()
    })

    app.use(cors(corsOptions))
    app.use(helmet())
    app.use(routes)

    app.use('*', (req, res) => res.status(404).send('404 Not Found'))

    app.listen(port, () => console.log(`App listening on port ${port}`))
}

main()
