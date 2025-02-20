import { Kysely } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema
        .createTable("project")
        .ifNotExists()
        .addColumn("id", "integer", (col) => col.primaryKey())
        .addColumn("title", "varchar(255)", (col) => col.notNull())
        .addColumn("description", "text")
        .addColumn("image_url", "varchar(255)", (col) => col.notNull())
        .execute();

    await db.schema
        .createTable("experience")
        .ifNotExists()
        .addColumn("id", "integer", (col) => col.primaryKey())
        .addColumn("role", "varchar(255)", (col) => col.notNull())
        .addColumn("company", "varchar(255)", (col) => col.notNull())
        .addColumn("location", "varchar(255)", (col) => col.notNull())
        .addColumn("industry", "varchar(255)", (col) => col.notNull())
        .addColumn("start_date", "date", (col) => col.notNull())
        .addColumn("end_date", "date", (col) => col.notNull())
        .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable("project").execute();
    await db.schema.dropTable("experience").execute();
}
