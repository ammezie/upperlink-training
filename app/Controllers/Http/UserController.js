"use strict";

const { validateAll } = use("Validator");
const User = use("App/Models/User");
const Hash = use("Hash");

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

  showLogin({ view }) {
    return view.render("users.login");
  }

  async login({ request, session, response, auth }) {
    // try {
    //   await auth.attempt(request.input("email"), request.input("password"));

    //   return response.redirect("/");
    // } catch (err) {
    //   session.flash({ alert: "Invalid email/password" });

    //   return response.redirect("back");
    // }

    try {
      const user = await User.query()
        .where("email", request.input("email_or_username"))
        .orWhere("username", request.input("email_or_username"))
        .firstOrFail();

      const passwordVerified = await Hash.verify(
        request.input("password"),
        user.password
      );

      if (!passwordVerified) {
        session.flash({ alert: "Invalid password" });

        return response.redirect("back");
      }

      // await auth.logout();

      // await auth.login(user);
      // await auth.loginViaId(user.id);

      return response.redirect("/");
    } catch (error) {
      session.flash({ alert: "Invalid email/username" });

      return response.redirect("back");
    }
  }
}

module.exports = UserController;
