import { EntitySchema } from "typeorm";

export const Author = new EntitySchema({
    name: "Author",
    tableName: "authors",
    columns: {
        id: {
            primary: true,
            type: "uuid",
            generated: "uuid" // O TypeORM gera automaticamente um UUID
        },
        name: {
            type: "varchar",
            length: 255
        },
        nationality: {
            type: "varchar",
            length: 255
        }
    }
});
