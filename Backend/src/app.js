const express = require("express")
const noteModel = require('./models/note.model')
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

//POST /api//notes

app.post("/api/notes", async (req, res)=>{
  const {title,description} = req.body

 const note = await noteModel.create({
    title,description
  })


  res.status(201).json({
    message: "note creatd successfully",
    note
})
})


//GET /api/notes
//fetch all the data from mongodb and send them in the response

app.get("/api/notes", async (req, res) =>{
  const notes = await noteModel.find()

  res.status(201).json({
    message: "notes fetch successfully",
    notes
  })
})


//DELETE /api/notes

app.delete("/api/notes/:id", async (req ,res) =>{
 const id = req.params.id

const noteModel = await noteModel.findByIdAndDelete(id)

 res.status(200).json({
  message: "note deleted successfully"
 })
 
})

//PATCH /api/notes
app.patch("/api/notes/:id", async (req ,res) =>{
  const id = req.params.id
  const {description} = req.body

 await noteModel.findByIdAndUpdate(id, {description})

 res.status(200).json({
  message: "Note updated successfully."
 })
})
module.exports = app