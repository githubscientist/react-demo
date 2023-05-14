import React, { useState } from 'react'
import { sculptureList } from '../data';

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleNextClick() {
      if (index < sculptureList.length - 1) {
          setIndex(index + 1);
      }
  }
   
function handlePreviousClick() {
    if (index > 0) {
        setIndex(index - 1);
    }
  }

  let sculpture = sculptureList[index];

  return (
      <section style={{ margin: '20px' }}>
        <button onClick={handlePreviousClick}>
        Previous
        </button>
          
      <button onClick={handleNextClick}>
        Next
      </button>

      <h2>
        { sculpture.name } by { sculpture.artist }
      </h2>

      <img 
        src={ sculpture.url }
        alt={ sculpture.alt }
      />

      <p>
        { sculpture.description }
      </p>
    </section>
  )
}