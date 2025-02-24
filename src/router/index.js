import express from "express";
import booksRouter from "./BooksRouter.js";
import authorsRouter from "./AuthorsRouter.js";

const routes = (app) => {
    app.use(express.json());
    app.use(booksRouter, authorsRouter);
}

export default routes;
