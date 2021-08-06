import React, { useState, useEffect } from 'react';
import axios from 'axios'

const SubmitForm = ({ formComplete, answers, setFormSubmitted }) => {

  let myAnswers = []
  const handleClick = (e) => {
    Object.keys(answers).map((answerKey) => {
      myAnswers.push({ id: answerKey, answer: answers[answerKey] })
    })
    axios.post('https://app.blockclinical.com/api/recruit/answers', {
      name: "Nicholas Sabadicci",
      answers: myAnswers
    })
    .then(res => {
      console.log(res)
      setFormSubmitted(true)
    })
    .catch(err => console.log(err))
  }
  return (
    formComplete && <div>
      <button type="submit" onClick={handleClick}>Submit</button>
    </div>
  )
}

export default SubmitForm