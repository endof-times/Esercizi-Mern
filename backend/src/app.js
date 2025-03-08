import express from 'express'
import { postsRoutes } from './routes/posts.js'
import bodyParser from 'body-parser'
import cors from 'cors'

//inizializza una variabile app contenente la funzione express()
//per informazioni sull'applicazione: ctrl+alt+click sulla funzione
const app = express()
//app.use è utilizzato per definire i middleware, se le routes sono dichiarate prima, non avranno accesso al middleware
app.use(cors())
app.use(bodyParser.json())
//Il body parser ci aiuta a gestire le richieste di tipo json controllando l'header Content-Type
//il metodo json ci aiuta nella fase di parsing delle richieste e restituisce lo status code 200 Ok 

//richiama una route di tipo get grazie ad express
app.get('/', (req, res) => {
  res.send(`Hello world`)
})

//funzione definita in: src/routes/posts.js
//le funzioni definite al suo interno saranno applicate ad app
postsRoutes(app)

//esportiamo l'app dopo aver eseguito tutte le operazioni
export { app }
