import express from "express";
import AuthorController from "../controllers/AuthorController.js";

const router = express.Router();

router.get("/", AuthorController.getAllAuthors);
router.get("/:id", AuthorController.getAuthorById);
router.post("/", AuthorController.createAuthor);
router.put("/:id", AuthorController.updateAuthor);
router.delete("/:id", AuthorController.deleteAuthor);

export default router;
