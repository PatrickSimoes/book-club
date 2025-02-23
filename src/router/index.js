import express from "express";
import routerBooks from "./BooksRouter.js";

const routes = (app) => {
    app.use(express.json());
    app.use(routerBooks);
}

export default routes;
