import app from './app.js'
import dotenv from "dotenv"
import conectarDB from './db.js'

conectarDB();

app.listen(4000)

console.log('Server on port',4000)