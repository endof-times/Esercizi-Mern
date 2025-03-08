import mongoose, { Schema } from 'mongoose'

//definiamo lo schema del db
const postSchema = new Schema({
    title: {type: String, required: true},
    author: String,
    contents: String,
    tags: [String]
}, {timestamps: true})

//creiamo una variabile da esportare per creare i vari campi, 
//questo è il modello del db
//il promo parametro di mongoose.model specifica il nome della collezione
export const Post = mongoose.model('post', postSchema)

//nel creare il primo post, viene anche creato lo schema del db e la collezione associata
//che avrà il nome specificato nel primo parametro di mongoose.model, al plurale
