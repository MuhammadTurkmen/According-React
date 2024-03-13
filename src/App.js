import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data)
  return <main>
    <div className="container">
      <h3>questions and answers about login</h3>
      <section className='info'>
          {data.map((qustion) => {
            const {id, title, info} = questions
            return <SingleQuestion key={id} {...qustion} />
          })}
      </section>
    </div>
  </main>
}

export default App;
