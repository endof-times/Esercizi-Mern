//import { Post } from "./components/Post";
import { CreatePost } from './components/CreatePost'
import { PostFilter } from './components/PostFilter'
import { PostSorting } from './components/PostSorting'
import { PostList } from './components/PostList'

const posts = [
  {
    title: 'Full-Stack React Projects',
    contents: "Let's become full-stack developers!",
    author: 'Daniel Bugl',
  },
  { title: 'Hello React!' },
]

export function App() {
  return (
    <div>
      <CreatePost />
      <hr />
      Author(filter by):
      <PostFilter field='author' />
      <hr />
      <PostSorting fields={['createdAt', 'updatedAt']} />
      <hr />
      <PostList posts={posts} />
    </div>
  )
  /**(
      <Post
      title="My Title"
      author= "Author"
      contents="Lorem ipsum"
    />
     <PostList posts = {posts} />
    <CreatePost />
    
  ) */
}
