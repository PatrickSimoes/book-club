import { Author } from "../entities/author.js";
import { AppDataSource } from "../config/data-source.js"; // ajuste o caminho conforme necessário

const authorRepository = AppDataSource.getRepository(Author);

class AuthorController {
    static async getAllAuthors(req, res) {
        const allAuthors = await authorRepository.find();

        res.status(200).json({ message: "All authors", data: allAuthors });
    };

    static async getAuthorById(id) {
        const author = await authorRepository.findOneBy({ id });

        res.status(200).json({ message: "author found", data: author });
    };

    static async createAuthor(author) {
        const newAuthor = await authorRepository.save(author);

        res.status(201).json({ message: "author created", data: newAuthor });
    };

    static async insert(author) {
        const updateInsert = await authorRepository.insert(author);

        res.status(201).json({ message: "author updated", data: updateInsert });
    };

    static async updateAuthor(id, author) {
        const updateAuthor = await authorRepository.insert(author);

        res.status(201).json({ message: "author updated", data: updateAuthor });
    };

    static async deleteAuthor(id) {
        const delted = await authorRepository.delete(id);

        res.status(200).json({ message: "author deleted", data: delted });
    };
};

export default AuthorController;
