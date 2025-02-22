import express from "express";
import bookService from "../services/BookService.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const books = await bookService.getAllBooks();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const book = await bookService.getBookById(id);
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const bookData = req.body;
        const newBook = await bookService.createBook(bookData);
        res.json(newBook);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const bookData = req.body;
        const result = await bookService.updateBook(id, bookData);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await bookService.deleteBook(id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
