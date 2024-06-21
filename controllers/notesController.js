const Note = require("../models/note");
const fetchNotes = async (req, res) => {
    const notes = await Note.find();
    res.json({notes });
}

const fetchNote = async (req, res) => {
    const noteID = req.params.id;
    const note = await Note.findById(noteID);
    res.json({note})
}

const createNote = async (req, res) => {
    const {title, body} = req.body

    const note = await Note.create({
        title,
        body,
    });

    res.json({note});
}

const updateNote = async (req, res) => {
    const noteID = req.params.id;
    const { title, body } = req.body;

    const updatedNote = await Note.findByIdAndUpdate(noteID, {
        title,
        body,
    }, { new: true }); // { new: true } ensures we get the updated note back

    res.json({ note: updatedNote });
}

const deleteNote = async (req, res) => {
    const noteID = req.params.id;

    await Note.deleteOne({ _id: noteID });

    res.json({ success: "Note deleted" });
}

module.exports = {
    fetchNotes,
    fetchNote,
    createNote,
    updateNote,
    deleteNote,
}