const knex = require('../database')

module.exports = {
    async postBook(req, res) {

        const { titulo, autores, editora, foto } = req.body

        try {
            const newBook = await knex('books')
                .insert({
                    titulo,
                    autores,
                    editora,
                    foto
                })
            return res.status(201).json(newBook)
        } catch (error) {
            res.json(error)
        }
    }
}