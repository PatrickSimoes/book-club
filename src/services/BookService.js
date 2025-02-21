import books from "../database/books.js"

const bookService = {
    findOne: (id) => {
        const findedBook = books.find(book => book.id == id);

        if (!findedBook) {
            return { message: `This id (${id}) Book is not found in library` }
        }

        return { message: `Book with id ${id} found`, data: findedBook };
    },

    findAll: () => {
        return { message: "Returning all books", data: books };
    },

    update: (id, bookData) => {
        let bookIndex = books.findIndex(book => book.id == id);

        if (bookIndex === -1) return { message: "Book not found" };

        books[bookIndex] = { ...books[bookIndex], ...bookData };

        return { message: `Book updated`, data: books };
    },

    insert: (bookData) => {
        const sortedBooks = [...books].sort((a, b) => b.id - a.id);
        const newId = sortedBooks.length > 0 ? sortedBooks[0].id + 1 : 1;

        const newBook = { id: newId, ...bookData };

        books.push(newBook);

        return { message: "Book created successfully", data: newBook };
    },

    delete: (id) => {
        const index = books.findIndex(book => book.id == id);

        if (index === -1) {
            return { message: `This id (${id}) is not found in the library` };
        }

        books.splice(index, 1);

        return { message: `Book with id ${id} deleted`, data: books };
    }
};

export default bookService;
