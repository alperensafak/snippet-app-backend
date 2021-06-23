import Snippet from "../models/snippet.js"

export const getSnippets = async (req, res) => {
    try {
        const snippets = await Snippet.find() //catch all snippets in db
        res.status(200).json(snippets)

    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }}
export const createSnippet = async (req, res) => {
    const snippet = req.body.data;
    const newSnippet = new Snippet(snippet)
    try {
        await newSnippet.save()
        res.status(201).json(newSnippet);
    } catch (error) {
        console.log(error)
    }
}

export const getSingleSnippet = async (req, res) => {
    try {
        const {id: _id} = req.params;
        const snippet = await Snippet.findById(_id)
        res.status(200).json(snippet)
    } catch (error) {
        console.log(error)
    }

}

export const updateSnippet = async (req, res) => {
    const {id: _id} = req.params;
    const snippet = req.body

    try {
        const updatedSnippet = await Snippet.findByIdAndUpdate(_id, snippet, {new: true})
        res.json(updatedSnippet)
    } catch (error) {
        console.log(error)
    }
}
export const deleteSnippet = async (req, res) => {
    const {id: _id} = req.params;
    try {
        const deletedSnippet = await Snippet.findByIdAndRemove(_id)
        res.json(deletedSnippet)
    } catch (error) {
        console.log(error)
    }
}