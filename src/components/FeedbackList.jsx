import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({feedback, handleDelete}) {
    console.log(Array.isArray(feedback))
    if(!feedback || feedback.length === 0){
        return <p>No feedback yet</p>
    }
  return (
    <div className='feedback-list'>
        {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
        ))}
    </div>
  )
}

export default FeedbackList

FeedbackList.propTypes = {
    children: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
}