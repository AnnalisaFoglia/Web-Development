import React, {useState} from 'react';
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea"


function App() {

    const [notes, setNotes] = useState([])

    function addNote(newNote) {
        setNotes(prevNotes => { //prevNotes is the content of the notes[]
            return [...prevNotes, newNote]
        })
    }

    function deleteNote(id) {
        setNotes(prevNotes => prevNotes.filter((noteItem, index) =>
            index !== id
        ))
    }

    return (
        <div>
            <Header/>
            <CreateArea onAdd={addNote}/>
            {notes.map((noteItem, index) =>
                <Note
                    id = {index}
                    key={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}
                />)}
            <Footer/>
        </div>
    );
}

export default App;
