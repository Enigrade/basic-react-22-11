import React from 'react'
import Accordion2 from '../decorators/accordion2'

function CommentList(props) {
  const { comments, isOpen, expand } = props

  return (
    <div>
      <br />
      <div style={{ marginBottom: '5px' }}>
        <b>Comments</b>
      </div>
      <button onClick={expand}>{isOpen ? 'close' : 'open'}</button>
      {getComments(isOpen, comments)}
    </div>
  )
}

function getComments(isOpen, data) {
  if (!isOpen) return null

  let commentItems = data.map((comment) => {
    return (
      <li key={comment.id}>
        <b>{comment.user}</b>
        <p>{comment.text}</p>
      </li>
    )
  })

  return <ul>{commentItems}</ul>
}

export default Accordion2(CommentList)
