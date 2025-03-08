import mongoose from "mongoose";

//definiamo una funzione da esportare che inizializza la connessione al db
//la funzione va richiamata con await
export function initDB(){

    //definizamo un url che punta al db locale mongo
    //utilizziamo la variabile d'ambiente impostata in test/globalSetup
    const DATABASE_URL = process.env.DATABASE_URL

    //aggiungiamo un listener che mostra un log quando viene aperta la connessione
    mongoose.connection.on('open', ()=>{
        console.info(`DB connection estabilished ${DATABASE_URL}`)
    })

    //stabiliamo una connessione e la conserviamo in una variabile da restituire
    const connection = mongoose.connect(DATABASE_URL)
    return connection
}