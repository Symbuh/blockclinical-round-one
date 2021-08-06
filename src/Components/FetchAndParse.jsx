import axios from 'axios'
import react, { useState, useEffect } from 'react';
import Form from './Form'

const FetchAndParse = () => {
  const [questions, setQuestions] = useState([])

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

  return (
    <div>
      <Form questions={questions}/>
    </div>
  )
}

export default FetchAndParse