import axios from 'axios'
import react, { useState, useEffect } from 'react';

const FetchAndParse = () => {
  const [questions, setQuestions] = useState('')

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
      hello
    </div>
  )
}

export default FetchAndParse