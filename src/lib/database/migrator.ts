import { promises as fs } from "fs";
import { FileMigrationProvider, Migrator, NO_MIGRATIONS } from "kysely";
import path from "path";
import { db } from "./kysely";

export async function migrateToLatest() {
    const migrator = new Migrator({
        db,
        provider: new FileMigrationProvider({
            fs,
            path,
            migrationFolder: path.join(__dirname, "migrations"),
        }),
    });

    const { error, results } = await migrator.migrateToLatest();

    results?.forEach((it) => {
        if (it.status === "Success") {
            console.log(
                `migration "${it.migrationName}" was executed successfully`
            );
        } else if (it.status === "Error") {
            console.error(`failed to execute migration "${it.migrationName}"`);
        }
    });

    if (error) {
        console.error("failed to run `migrateToLatest`");
        console.error(error);
        process.exit(1);
    }

    await db.destroy();
}

// export async function resetMigrations() {
//     const migrator = new Migrator({
//         db,
//         provider: new FileMigrationProvider({
//             fs,
//             path,
//             migrationFolder: path.join(__dirname, "migrations"),
//         }),
//     });

//     const { error, results } = await migrator.migrateTo(NO_MIGRATIONS);

//     results?.forEach((it) => {
//         if (it.status === "Success") {
//             console.log(
//                 `migration reset "${it.migrationName}" was executed successfully`
//             );
//         } else if (it.status === "Error") {
//             console.error(
//                 `failed to execute migration reset "${it.migrationName}"`
//             );
//         }
//     });

//     if (error) {
//         console.error("failed to run `resetMigrations`");
//         console.error(error);
//         process.exit(1);
//     }

//     await db.destroy();
// }
