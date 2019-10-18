"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.on("/").render("welcome");

Route.get("/register", "UserController.showRegister");
Route.post("/register", "UserController.register").as("register");
Route.get("/login", "UserController.showLogin");
Route.post("/login", "UserController.login").as("login");

Route.get("/posts", "PostController.index").as("posts.index");
Route.get("posts/create", "PostController.create");
Route.post("posts", "PostController.store")
  .as("posts.store")
  .validator("StorePost");
