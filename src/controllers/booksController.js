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
    },

    async getBookById(req, res) {
        const { id } = req.params

        try {
            const book = await knex
                .from('books')
                .select(
                    'titulo',
                    'editora',
                    'foto',
                    'autores'
                ).where({ id })

            return res.status(200).json(book)

        } catch (error) {
            return res.status(404).json({ message: "not found" })
        }
    },

    async updateBook(req, res) {
        const { id } = req.params
        const { titulo, autores, editora, foto } = req.body

        try {
            const updatedBook = await knex('books')
                .update({ titulo, autores, editora, foto })
                .where({ id: id })

            return res.status(201).json(updatedBook)
        } catch (error) {
            return res.status(404).json({ message: "not found" })
        }
    },

    async deleteBook(req, res) {
        const { id } = req.params

        try {

            const deletedBook = await knex('books')
            .where({ id })
            .del()

            return res.status(201).json({message: "livro deletado"})

        }catch(error) {
            return res.status(404).json({message: "not found"})
        }
    }
}