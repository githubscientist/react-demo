import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function MessageDetails() {
    const { id } = useParams();

    const messageData = {
        1: { name: 'John', age: 25 },
        2: { name: 'Jane', age: 30 },
        3: { name: 'Mark', age: 35 },
        4: { name: 'Zoe', age: 21 },
        5: { name: 'Alice', age: 40},
    };

    const message = messageData[id];

  return (
      <div>
          <h1>Message Details: {id}</h1>
          <p>Name: {message.name}</p>
          <p>Age: { message.age }</p>
    </div>
  )
}

export default MessageDetails;