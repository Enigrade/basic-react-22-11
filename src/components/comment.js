import React from 'react'

function Comment(props) {
  const { comment, isOpen, toggleOpen } = props
  return (
    <div>
      <h6>{comment.user}</h6>
      <button onClick={toggleOpen}>{isOpen ? 'close' : 'open'}</button>
      {getBody(props)}
    </div>
  )
}

function getBody({ isOpen, comment }) {
  if (!isOpen) return null

  return <section>{comment.text}</section>
}

export default Comment
