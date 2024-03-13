import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data)
  return <main>
    <div className="container">
      <h3>blah and blah</h3>
      <section className="info">
        {
          data.map((question) => {
            const [id, title, info] = question
            return <SingleQuestion key={id} {...question}/>
          })
        }
      </section>
    </div>
  </main>
    
}

export default App;
