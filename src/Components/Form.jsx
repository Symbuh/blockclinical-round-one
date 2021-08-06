import react, { useState, useEffect } from 'react'

const Form = ({ questions }) => {
  console.log(questions)

  const [answers, setAnswers] = useState([])

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value
    }
    )
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
  </div>
  )
}

export default Form