//import { Post } from "./components/Post";
import { getPosts } from './api/posts'
import { CreatePost } from './components/CreatePost'
import { PostFilter } from './components/PostFilter'
import { PostSorting } from './components/PostSorting'
import { PostList } from './components/PostList'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

export function Blog() {
  const [author, setAuthor] = useState('')
  const [sortBy, setSortBy] = useState('created_at')
  const [sortOrder, setSortOrder] = useState('descending')

  const postsQuery = useQuery({
    queryKey: ['posts', { author, sortBy, sortOrder }],
    queryFn: () => getPosts({ author, sortBy, sortOrder }),
  })

  const posts = postsQuery.data ?? []
  return (
    <div>
      <CreatePost />
      <hr />
      Author(filter by):
      <PostFilter
        field='author'
        value={author}
        onChange={(value) => setAuthor(value)}
      />
      <hr />
      <PostSorting
        fields={['createdAt', 'updatedAt']}
        value={sortBy}
        onChange={(value) => setSortBy(value)}
        orderValue={sortOrder}
        onOrderChange={(orderValue) => setSortOrder(orderValue)}
      />
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
