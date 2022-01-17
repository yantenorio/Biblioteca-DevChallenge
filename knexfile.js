module.exports = {
    development: {
        client: 'mysql2',
        connection: {
            database: 'library_system',
            user: 'root',
            password: 'root'
        },
        migrations: {
            tableName: 'books_table',
            directory: `${__dirname}/src/database/migrations`
        }

    }
}