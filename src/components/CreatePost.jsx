import { useMutation , useQueryClient} from '@tanstack/react-query'
import { useState } from 'react'
import { createPost } from '../api/posts'
export function CreatePost() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [contents, setContents] = useState('')
  const queryClient = useQueryClient()
  const createPostMutation = useMutation({
    mutationFn: () => createPost({ title, author, contents }),
    onSuccess: ()=>queryClient.invalidateQueries(['posts'])
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    createPostMutation.mutate()
  }
  return (
    <form action='' onSubmit={handleSubmit}>
      <div>
        <label htmlFor='create-title'>Title:</label>
        <input
          type='text'
          name='create-title'
          id='create-title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label htmlFor='create-author'>Author: </label>
        <input
          type='text'
          name='create-author'
          id='create-author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <br />
      <textarea
        value={contents}
        onChange={(e) => setContents(e.target.value)}
      />
      <br />
      <input
        type='submit'
        value={createPostMutation.isPending ? 'Creating...' : 'Create'}
        disabled={!title || createPostMutation.isPending}
      />
      {createPostMutation.isSuccess ? (
        <>
          <br />
          Post created successfully!
        </>
      ) : null}
    </form>
  )
}

//Form che invia i dati del nuovo post
//e.preventDefault blocca il comportamento di base che ricarica la pagina all'invio del form
