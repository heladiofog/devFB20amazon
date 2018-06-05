import express from 'express';
import cors from 'cors';
import parser from 'body-parser';
import routers from './routers';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import db from './models';


const app = express()
const port = process.env.PORT || 3000

app.use(parser.urlencoded({extended : true}))
app.use(parser.json())
app.use(cors())

const options = {
    swaggerDefinition: {
        info: {
            title: 'amazon docs',
            version: '1.0.0'
        }
    },
    securityDefinitios: {
        auth: {
            type: 'basic'
        }
    },
    apis: ['./routers/index.js']
}

const swaggerSpec = swaggerJSDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use('/api/v1', routers)
app.listen(port, () => {
    console.log(`Server start at port ${port}`)

    // db.sequelize.sync({
    //     force: true
    // })
});