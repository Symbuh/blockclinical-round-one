import axios from 'axios'
import react, { useState, useEffect } from 'react';
import Form from './Form'

const FetchAndParse = () => {
  const [questions, setQuestions] = useState([])
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = () => {
    axios.get('https://app.blockclinical.com/api/recruit/questions')
    .then(response => {
      setQuestions(response.data.data.info.questions)
    })
    .catch(err => console.log(err))
  }

  if (formSubmitted) {
    return (
      <h1>Form is complete</h1>
    )
  }

  return (
    <div>
      <Form questions={questions} setFormSubmitted={setFormSubmitted}/>
    </div>
  )
}

export default FetchAndParse