import { EntitySchema } from "typeorm";

export const Book = new EntitySchema({
    name: "Book",
    tableName: "books",
    columns: {
        id: {
            primary: true,
            type: "uuid",
            generated: "uuid"
        },
        title: {
            type: "varchar",
            length: 255
        },
        pages: {
            type: "int"
        },
        price: {
            type: "float"
        },
        isAvailable: {
            type: "boolean",
            default: true
        },
    },
    relations: {
        author: {
            type: "many-to-one",
            target: "Author",
            inverseSide: "books",
        }
    }
});
