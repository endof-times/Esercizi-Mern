import PropTypes from 'prop-types'

export function Post({ title, author, contents }) {
  return (
    <article>
      <h3>{title}</h3>
      <div>{contents}</div>
      {author && (
        <em>
          Written by<strong>{author}</strong>
        </em>
      )}
    </article>
  )
}

//Usiamo PropTypes per assicurarci che il tipo dei prop ricevuti sia giusto
//In TS possiamo farlo definendo il tipo della variabile
Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  contents: PropTypes.string,
}
