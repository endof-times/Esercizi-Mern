import dotenv from 'dotenv'
import { app } from './app.js'
import { initDB } from './db/init.js'
//funzione lanciata prima delle altre per aprire l'ambiante con variabili
//servirà per poter utilizzare process.env
dotenv.config()

//connessione asincrona che inizializza il db ed apre un server che ascolta le connessioni
try {
  await initDB()
  const Port = process.env.PORT
  app.listen(Port)
  console.info(`App listening: http://localhost:${Port}`)
} catch (err) {
  console.log(`Error connecting to database: ${err}`)
}
