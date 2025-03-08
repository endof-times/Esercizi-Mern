//import { Post } from '../db/models/post.js'
import {
  createPost,
  listAllPosts,
  listPostsByAuthor,
  listPostsByTags,
  getPostById,
  updatePostById,
  deletePostById
} from '../services/posts.js'


//funzione da richiamare in app.js per aggiungere le routes
export function postsRoutes(app) {
  //definisce la route di tipo GET: /api/v1/posts
  //ottiene le query string tramite una variabile: req.query
  app.get('/api/v1/posts', async (req, res) => {
    //la variabile req.query contiene i parametri della richiesta get
    //assegnata ad un oggetto contenente i campi della collezione
    const { sortBy, sortOrder, author, tags } = req.query
    //selezioniamo solo sortBy e sortOrder inserendole nella variabile options
    const options = { sortBy, sortOrder }

    try {
      //se esistono author e tags, sono state passate entrambe le query in qualche modo nella richiesta
      //dato che vogliamo controllare l'ordine in base ad un solo parametro, restituiamo un errore
      if (author && tags) {
        return res
          .status(400) //Bad Request
          .json({ error: 'Query by author OR tags, not both' })
      } else if (author) {//se esiste uno solo dei due, richiamiamo la funzione associata
        return res.json(await listPostsByAuthor(author, options))//Ok
      } else if (tags) {
        return res.json(await listPostsByTags(tags, options))//Ok
      } else {//se non è presente nessuno dei due, li mostriamo secondo l'ordine di default (createdAt)
        return res.json(await listAllPosts(options))//Ok
      }
    } catch (err) {
      console.error(`Error listing posts: ${err}`)
      return res.status(500).end() //internal server error
    }
  })

  //definisce la route per mostrare un elemento di tipo GET: /api/v1/posts/:id
  //per ottenere il parametro esplicito :id utilizziamo una variabile: req.params
  app.get('/api/v1/posts/:id', async (req,res)=>{
    //in questo caso assegnamo req.params ad un oggetto contente solo id
    //da notare che req.query e req.params vengono assegnati a degli oggetti 
    const {id} = req.params
    try{
        const post = await getPostById(id)

        if(post === null){return res.status(404).end()} //Not Found
        return res.json(post)//Ok
    }catch (err){
    console.log(`Error getting post: ${err}`);
    return res.status(500).end() //Internal server error
    }
  })

  app.post('/api/v1/posts', async (req,res)=>{
    try{
      const post = await createPost(req.body)
      return res.json(post)
    }catch (err){
      console.error(`Internal server error: ${err}`)
      return res.status(500).end()
    }
  })

  app.patch('/api/v1/posts/:id', async (req,res)=>{
    try{
      const post = await updatePostById(req.params.id, req.body)
    return res.json(post)
    }catch (err){
      console.error(`Internal server error: ${err}`)
      return res.status(500).end()
    }
  })

  app.delete('/api/v1/posts/:id', async (req,res)=>{
    try{
      const {deletedCount} = await deletePostById(req.params.id) 
      if(deletedCount === 0) return res.status(404).end()
      return res.status(204).end()
    }catch (err){
      console.error(`Internal server error: ${err}`)
      return res.status(500).end()
    }
  })
}