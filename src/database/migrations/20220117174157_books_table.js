/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = knex => knex.schema.createTable('books', table => {
      
      table.increments('id')
      table.text('titulo').notNullable()
      table.text('editora').notNullable()
      table.text('foto').notNullable()
      table.text('autores').notNullable()
      
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('books');