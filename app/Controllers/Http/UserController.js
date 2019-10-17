"use strict";

const { validateAll } = use("Validator");
const User = use("App/Models/User");

class UserController {
  showRegister({ view }) {
    return view.render("users.register");
  }

  async register({ request, response, session }) {
    const validation = await validateAll(request.all(), {
      full_name: "required",
      email: "required|email|unique:users",
      username: "required|unique:users",
      password: "required|confirmed",
    });

    if (validation.fails()) {
      session.withErrors(validation.messages()).flashExcept(["password"]);

      return response.redirect("back");
    }

    await User.create({
      full_name: request.input("full_name"),
      email: request.input("email"),
      username: request.input("username"),
      password: request.input("password"),
    });

    // const user = new User();

    // user.full_name = request.input("full_name");
    // user.email = request.input("email");
    // user.username = request.input("username");
    // user.password = request.input("password");

    // await user.save();

    return response.redirect("/");
  }
}

module.exports = UserController;
