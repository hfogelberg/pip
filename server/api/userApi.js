const { User } = require("../models/userModel");

let user = (app, db) => {
  app.post("/api/user", (req, res) => {
    const token = req.body.user.cookieVal;
    const webUser = {
      firstName: req.body.user.firstName,
      lastName: req.body.user.lastName,
      email: req.body.user.email,
      photo: req.body.user.photo
    };

    User.findOne({ email: webUser.email })
      .then(user => {
        if (user) {
          // User exists
          let hasToken = false;

          user.tokens.map(t => {
            if (t.token === token) {
              hasToken = true;
            }
          });

          if (!hasToken) {
            user.tokens.push({ token });
            user
              .save()
              .then(u => {
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
