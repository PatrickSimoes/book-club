import express from "express";
import books from "../database/books.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World");
});

router.get("/books", (req, res) => {
    res.json(books);
});

export default router;
