import { EntitySchema } from "typeorm";

export const Author = new EntitySchema({
    name: "Author",
    tableName: "authors",
    columns: {
        id: {
            primary: true,
            type: "uuid",
            generated: "uuid"
        },
        name: {
            type: "varchar",
            length: 255
        },
        nationality: {
            type: "varchar",
            length: 255
        },
    },
    relations: {
        books: {
            type: "one-to-many",
            target: "Book",
            inverseSide: "author"
        }
    }
});
