const { User } = require("../models/userModel");

let user = (app, db) => {
  // POST - log in user
  // NOTE: During dev no sign up
  app.post("/api/user", (req, res) => {
    console.log("**** POST USER ****");
    const token = req.body.user.cookieVal;
    const webUser = {
      firstName: req.body.user.firstName,
      lastName: req.body.user.lastName,
      email: req.body.user.email,
      photo: req.body.user.photo
    };

    console.log(webUser);
    User.findOne({ email: webUser.email })
      .then(user => {
        console.log("User is in Db");
        if (user) {
          // User exists
          let hasToken = false;

          user.tokens.map(t => {
            if (t.token === token) {
              hasToken = true;
            }
          });

          if (!hasToken) {
            console.log("New token needs to be added");
            user.tokens.push({ token });
            user
              .save()
              .then(u => {
                console.log("DB user", user);
                res.json({
                  message: "New token added",
                  user: user
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).send({ message: "Error updating user" });
              });
          } else {
            console.log("Token is already in Db");
            console.log("DB user", user);

            res.json({
              message: "Have username and token for user. All is OK",
              user: user
            });
          }
        } else {
          // Return error
          // Currently only login. Signup not supported
          const err = { message: "Signup not permitted" };
          res.status(403).send({ err });
        }
      })
      .catch(err => {
        res.status(500).send({ message: "Error fetching user" });
      });
  });
};

module.exports = { user };
