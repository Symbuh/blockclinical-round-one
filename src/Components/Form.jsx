import react, { useState, useEffect } from 'react'

const Form = ({ questions }) => {
  console.log(questions)

  return (
  <div>
    {
      questions.map((question) => {
      return (
        <div>
          <div>
            {question.question}
          </div>
          <input type="text"></input>
        </div>
      )})
    }
  </div>
  )
}

export default Form