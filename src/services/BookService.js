import { Book } from "../entities/book.js";
import { AppDataSource } from "../config/data-source.js"; // ajuste o caminho conforme necessário

const bookRepository = AppDataSource.getRepository(Book);

const bookService = {
    async getAllBooks() {
        return await bookRepository.find();
    },

    async getBookById(id) {
        return await bookRepository.findOneBy({ id });
    },

    async createBook(book) {
        return await bookRepository.save(book);
    },

    // Adicionando o método insert
    async insert(book) {
        return await bookRepository.insert(book);
    },

    async updateBook(id, book) {
        return await bookRepository.update(id, book);
    },

    async deleteBook(id) {
        return await bookRepository.delete(id);
    },
};

export default bookService;
