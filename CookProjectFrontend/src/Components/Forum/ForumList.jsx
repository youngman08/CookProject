import React from 'react'
import ForumCard from './ForumCard'

function ForumList({Forums }) {
  return (
    <div className="card-list container">
      {Forums.map((Forum) => (
        <ForumCard key={Forum.id} Forum={Forum} />
      ))}
    </div>
  )
}

export default ForumList
