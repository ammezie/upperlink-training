"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CategoryPostSchema extends Schema {
  up() {
    this.create("category_posts", table => {
      table.integer("post_id").unsigned();
      table.integer("category_id").unsigned();
    });
  }

  down() {
    this.drop("category_posts");
  }
}

module.exports = CategoryPostSchema;
