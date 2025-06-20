import { useState } from "react";
import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackData from "./data/FeedbackData"
import AboutPage from "./pages/AboutPage"
import { v4 as uuidv4 } from 'uuid'

function App(){
    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure you want to delete this item?"))
        setFeedback(feedback.filter((item) => item.id !== id))}

    const addFeedback = (newFeedback)  => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
        console.log(newFeedback)}  

   return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;


