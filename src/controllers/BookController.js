import { Book } from "../entities/book.js";
import { AppDataSource } from "../config/data-source.js"; // ajuste o caminho conforme necessário

const bookRepository = AppDataSource.getRepository(Book);

class BookController {
    static async getAllBooks(req, res) {
        const allBooks = await bookRepository.find();

        res.status(200).json({ message: "All books", data: allBooks });
    };

    static async getBookById(id) {
        const book = await bookRepository.findOneBy({ id });

        res.status(200).json({ message: "Book found", data: book });
    };

    static async createBook(book) {
        const newBook = await bookRepository.save(book);

        res.status(201).json({ message: "Book created", data: newBook });
    };

    static async insert(book) {
        const updateInsert = await bookRepository.insert(book);

        res.status(201).json({ message: "Book updated", data: updateInsert });
    };

    static async updateBook(id, book) {
        const updateBook = await bookRepository.insert(book);

        res.status(201).json({ message: "Book updated", data: updateBook });
    };

    static async deleteBook(id) {
        const delted = await bookRepository.delete(id);

        res.status(200).json({ message: "Book deleted", data: delted });
    };
};

export default BookController;
