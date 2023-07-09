import React, { useState } from 'react';
import Note from './Note';

function ReadNotes({ notes }) {
    
    const [showStatus, setShowStatus] = useState('all');

    const handleStatusChange = (event) => {
        setShowStatus(event.target.value);
    }

    const filterNotes = (notes, status) => {
        switch (status) {
            case 'all':
                return notes;
            case 'imp':
                return notes.filter(note => note.important === true);
            case 'nonimp':
                return notes.filter(note => note.important === false);
        }
    }

    const notesFiltered = filterNotes(notes, showStatus);

  return (
    <div>
          <h1>Notes</h1>
          
          <label>
              <input type='radio' name='filter' value="all" onChange={handleStatusChange} />
              Show All Notes
          </label>

          <label>
              <input type='radio' name='filter' value="imp" onChange={handleStatusChange} />
              Show Important Notes
          </label>

          <label>
              <input type='radio' name='filter' value="nonimp" onChange={handleStatusChange} />
              Show Non-Important Notes
          </label>

          <ul>
              {
                  notesFiltered.map(note => 
                      <Note key={note.id} note={note} />
                  )
              }
        </ul>
    </div>
  )
}

export default ReadNotes;