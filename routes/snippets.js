import express from "express";
import {getSnippets,createSnippet,updateSnippet,getSingleSnippet,deleteSnippet} from "../controllers/snippets.js"

const router = express.Router();


// http:localhost/snippets
//get post delete update
router.get("/",getSnippets)
router.post("/",createSnippet)
router.patch("/:id",updateSnippet)
router.delete("/:id",deleteSnippet)

export default router;