'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostSchema extends Schema {
  up () {
    this.create('posts', table => {
      table.increments()
      table
        .string('title')
        .notNullable()
        .unique()
      table.text('context').notNullable()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .on('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostSchema
