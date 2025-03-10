import PropTypes from 'prop-types'
import { Post } from './Post'

export function PostList({ posts = [] }) {
  //Da ricordeare le parentesi tonde per map, dato che restituisce un componente (Post)
  //Utilizzare l'espansione degli array permette di passare i campi ti un post come props
  //Quindi stiamo creando una lista di elementi article che hanno le seguenti proprietà:
  //key = post._id
  //title = post.title
  //author = post.author
  //contents = post.contents
  //tags = post.tags
  return (
    <div>
      {posts.map((post) => (
        <Post {...post} key={post._id} />
      ))}
    </div>
  )
}

//Usiamo PropTypes per assicurarci che il tipo dei prop ricevuti sia giusto
PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(Post.propTypes)).isRequired,
}
