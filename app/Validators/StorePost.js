"use strict";

class StorePost {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      title: "required|max:255|unique:posts",
      context: "required",
      category_ids: "required|array",
    };
  }

  // get messages () {

  // }

  //   get fails () {

  //   }
}

module.exports = StorePost;
