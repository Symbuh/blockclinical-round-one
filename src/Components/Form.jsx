import react, { useState, useEffect } from 'react'
import SubmitForm from './SubmitForm'

const Form = ({ questions }) => {
  const [answers, setAnswers] = useState([])
  const [formComplete, setFormComplete] = useState(false)

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value
    })
    if (Object.keys(answers).length === questions.length) {
      setFormComplete(true)
    }
  }
  return (
  <div>
    {
      questions.map((question) => {
      return (
        <div key={question.id}>
          <div>
            {question.question}
          </div>
          <textarea
            type="text"
            className="textInput"
            name={question.id}
            onChange={handleChange}
          ></textarea>
        </div>
      )})
    }
    <SubmitForm answers={answers} formComplete={formComplete} />
  </div>
  )
}

export default Form