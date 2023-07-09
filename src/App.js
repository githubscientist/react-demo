import React, { useEffect, useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import ReadNotes from './components/ReadNotes';
import axios from 'axios';
import CreateNote from './components/CreateNote';

function App() {

  const [notes, setNotes] = useState([]);

  const fetchAllNotes = async () => {
    await axios
      .get('https://be-uahl.onrender.com/api/notes')
      .then(response => setNotes(response.data));
  }

  useEffect(() => {
    fetchAllNotes();
  }, []);

  const padding = {
    padding: 30,
  };

  return (
    <Router>
      <div>
        <Link to="/" style={padding}>Home</Link>
        <Link to="/notes" style={padding}>Read Notes</Link>
        <Link to="/createNote" style={padding}>Create Note</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notes' element={<ReadNotes notes={notes} />} />
        <Route path='/createNote' element={<CreateNote />} />
      </Routes>
    </Router>
  )
}

export default App;