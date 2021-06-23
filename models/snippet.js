import mongoose from "mongoose";

const snippetSchema = mongoose.Schema({
    name: String,
    language: String,
    description: String,
    code: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

const Snippet = mongoose.model("Snippet", snippetSchema)
export default Snippet;