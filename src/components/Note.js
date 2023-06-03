import React from 'react';

function Note({ note, toggleImportance, deleteNote }) {

  const label = note.important ? 'make not important' : 'make important';

  return (
    <li>
      {note.content} 
      <button onClick={toggleImportance}>{label}</button>
      <button onClick={deleteNote}>delete</button>
    </li>
  )
}

export default Note;