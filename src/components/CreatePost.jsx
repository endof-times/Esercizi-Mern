export function CreatePost() {
  return (
    <form action='' onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor='create-title'>Title:</label>
        <input type='text' name='create-title' id='create-title' />
      </div>
      <br />
      <div>
        <label htmlFor='create-author'>Author: </label>
        <input type='text' name='create-author' id='create-author' />
      </div>
      <br />
      <textarea />
      <br />
      <input type='submit' value='Submit' />
    </form>
  )
}

//Form che invia i dati del nuovo post
//e.preventDefault blocca il comportamento di base che ricarica la pagina all'invio del form
