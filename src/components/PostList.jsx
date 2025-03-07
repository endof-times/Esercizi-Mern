import PropTypes from 'prop-types'
import { Post } from './Post'

export function PostList({ posts = [] }) {
  //Da ricordeare le parentesi tonde per map, dato che restituisce un componente (Post)
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
