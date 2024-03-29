"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Category extends Model {
  posts() {
    return this.belongsToMany("App/Models/Post").pivotTable("category_posts");
  }
}

module.exports = Category;
