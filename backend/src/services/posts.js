import { Post } from '../db/models/post.js'

//funzione utilizzata per inserire i posts nella collezione
export async function createPost({ title, author, contents, tags }) {
  const post = new Post({ title, author, contents, tags })
  return await post.save()
}

//funzioni utilizzate per visualizzare i posts del db
async function listPosts(
  query = {},
  { sortBy = 'createdAt', sortOrder = 'descending' } = {},
) {
  return await Post.find(query).sort({ [sortBy]: sortOrder })
}

export async function listAllPosts(options) {
  return await listPosts({}, options)
}

export async function listPostsByAuthor(author, options) {
  return await listPosts({ author }, options)
}

export async function listPostsByTags(tags, options) {
  return await listPosts({ tags }, options)
}

export async function getPostById(postId){
  return await Post.findById(postId)
}

export async function updatePostById(postId, {title, author, contents, tags}){
  return await Post.findOneAndUpdate(
    {_id: postId},
    {$set: {title, author, contents, tags}},
    {new: true}
  )
}

export async function deletePostById(postId){
  return await Post.deleteOne({_id: postId})
}
