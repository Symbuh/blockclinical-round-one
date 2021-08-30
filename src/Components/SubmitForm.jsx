import React from 'react';
import axios from 'axios'
import qs from 'qs'
const SubmitForm = ({ formComplete, answers, setFormSubmitted }) => {

  let myAnswers = []
  const handleClick = (e) => {
    Object.keys(answers).map((answerKey) => {
      myAnswers.push({ id: answerKey, answer: answers[answerKey] })
    })

    const encodedJSON = qs.stringify({ 'answers': myAnswers })

    // also tried {params: 'answers': encodedJSON }

    axios.post('https://app.blockclinical.com/api/recruit/answers', encodedJSON,
      { params: { encodedJSON },
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