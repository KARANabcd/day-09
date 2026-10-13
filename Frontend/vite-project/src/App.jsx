import React, { useState } from 'react'
import axios from "axios"

const App = () => {
  const [notes, setNotes] = useState([
    {
      title: "test title",
      description :"test description"
    },
    {
      title: "test title",
      description :"test description"
    },
    {
      title: "test title2",
      description :"test description2"
    },
    {
      title: "test title3",
      description :"test description3"
    },
    {
      title: "test title4",
      description :"test description4"
    },
  ])

  axios.get("http://localhost:3000/api/notes").then((res)=>{
  setNotes(res.data.notes);
   
  })
  return (
    <div className='notes'>
      {
        notes.map(note => {
      return  <div className='note'>
       <h1>{note.title}</h1>
       <p>{note.description}</p>
      </div>  
        })
      }
      
     
    </div>
  )
}

export default App
