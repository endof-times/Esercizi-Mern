import { MongoMemoryServer } from 'mongodb-memory-server'

//definiamo una funzione globalSetup che crea un memory server per mongo
export default async function globalSetup() {
  //definiamo una variabile che conserva l'istanza di crezione del memory server
  const instance = await MongoMemoryServer.create({
    binary: { version: '6.0.4' },
  })

  //definiamo una variabile globale dell'istanza da utilizzare quando verrà chiuso il server
  global.__MONGOINSTANCE = instance

  process.env.DATABASE_URL = instance.getUri()
}
