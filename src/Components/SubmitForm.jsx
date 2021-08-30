import React from 'react'
import axios from 'axios'
import qs from 'qs'

const SubmitForm = ({ formComplete, answer, setFormSubmitted }) => {

  let myAnswers = []
  const handleClick = (e) => {
    Object.keys(answer).map((answerKey) => {
      myAnswers.push({ id: answerKey, answer: answer[answerKey] })
    })

    // const answers = encodeURIComponent(JSON.stringify({ 'answers': myAnswers }))


    const answers = qs.stringify( {'answers':  myAnswers })

    // axios(config)
    // .then(function (response) {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    // also tried {params: 'answers': encodedJSON }

    axios.post('https://app.blockclinical.com/api/recruit/answers',  {answers: answers },
      { params: { answers: answers }, headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
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