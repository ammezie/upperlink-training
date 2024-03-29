"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Post extends Model {
  user() {
    return this.belongsTo("App/Models/User");
  }

  categories() {
    return this.belongsToMany("App/Models/Category").pivotTable(
      "category_posts"
    );
  }
}

module.exports = Post;
