"use strict";

class PostController {
  constructor({ socket, request }) {
    this.socket = socket;
    this.request = request;

    // console.log(this.socket);
  }
}

module.exports = PostController;
