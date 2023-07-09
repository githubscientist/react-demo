import axios from 'axios';
import React, { useState } from 'react';

function CreateNote() {

    const [newNoteContent, setNewNoteContent] = useState('');
    const [newNoteImportance, setNewNoteImportance] = useState('');

    const addNote = (event) => {
        event.preventDefault();

        // prepare a new note
        let noteObject = {
            content: newNoteContent,
            important: newNoteImportance==='Yes'
        }
        
        axios
            .post('https://be-uahl.onrender.com/api/notes', noteObject)
            .then((response) => console.log('note added'));
        
        setNewNoteContent('');
        setNewNoteImportance('--Select--');
    }



  return (
    <div>
        <h1>Create A New Note</h1>
        
          <form onSubmit={addNote}>
              <input placeholder='type a new note...' value={newNoteContent} onChange={(e) => setNewNoteContent(e.target.value)}></input>
              <br />
              <br />
              <label>Is Important: </label>
              <select
                  onChange={e => setNewNoteImportance(e.target.value)}
                  value={newNoteImportance}
              >
                  <option>--Select--</option>
                  <option>Yes</option>
                  <option>No</option>
              </select>
              <br />
              <br />
              <button type='submit'>Add New Note</button>
        </form>

    </div>
  )
}

export default CreateNote;