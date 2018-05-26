import express from 'express';
import cors from 'cors';
import parser from 'body-parser';
import routers from './routers';
import db from './models';

const app = express()
const port = process.env.PORT || 8000

app.use(parser.urlencoded({extended : true}))
app.use(parser.json())
app.use(cors())

app.use('/api/v1', routers)
app.listen(port, () => {
    // db.sequelize.sync();
    console.log(`Server start at port ${port}`)
})