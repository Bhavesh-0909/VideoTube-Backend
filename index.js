const app = require('./app')
const mongoDB = require('./db/mongoDb.db');
require('dotenv').config()

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server Started at ${PORT}`)
})

mongoDB()