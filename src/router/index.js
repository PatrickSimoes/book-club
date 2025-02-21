import express from "express";
import bookService from "../services/BookService.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.json(bookService.findAll());
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.json(bookService.findOne(id));
});

router.post("/", (req, res) => {
    const bookData = req.body;

    res.json(bookService.insert(bookData));
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const bookData = req.body;
    res.json(bookService.update(id, bookData));
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.json(bookService.delete(id));
});

export default router;
