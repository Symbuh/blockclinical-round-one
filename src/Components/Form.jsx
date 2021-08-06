import react, { useState, useEffect } from 'react'
import SubmitForm from './SubmitForm'

const Form = ({ questions }) => {
  console.log(questions)

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
          <input
            type="text"
            className="textInput"
            name={question.id}
            onChange={handleChange}
          ></input>
        </div>
      )})
    }
    <SubmitForm answers={answers} formComplete={formComplete} />
  </div>
  )
}

export default Form