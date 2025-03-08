import { initDB } from "./db/init.js";
import { Post } from "./db/models/post.js";

//dato che la funzione initDB è async, dobbiamo utilizzare await
//altrimante richiamo di eseguire un accesso al db èrima di stabilire la connessione

await initDB()

//creiamo un post
const post = new Post({
    title: 'My title',
    author: "First author",
    contents: 'My post',
    tags: ['new', 'tag']
})

//salviamo con await per assicurarci che il db sia connesso
await post.save()

//mostriamo i campi creati utilizzando un metodo statico
const posts = await Post.find()

//aggiorna un post specifico
await Post.findByIdAndUpdate(posts[0]._id,{
    $set: {title: "New title"}
})

console.log(posts);
