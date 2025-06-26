import {motion, AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackProvider'

function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)
    console.log(Array.isArray(feedback))
    if(!feedback || feedback.length === 0){
        return <p>No feedback yet</p>
    }
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div key={item.id}
          initial={{opacity:0}}
           animate={{opacity:1}}
            exit={{opacity:0}}
           >
            <FeedbackItem key={item.id} item={item} />
             </motion.div>
        ))
       }
        </AnimatePresence>
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