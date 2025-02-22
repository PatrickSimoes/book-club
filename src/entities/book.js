import { EntitySchema } from "typeorm";

export const Book = new EntitySchema({
    name: "Book",
    tableName: "books",
    columns: {
        id: {
            primary: true,
            type: "uuid",
            generated: "uuid" // O TypeORM gera automaticamente um UUID
        },
        title: {
            type: "varchar",
            length: 255
        },
        author: {
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
        }
    }
});
