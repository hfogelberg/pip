const {
  Character
} = require("./models/characterModel");

let character = (app, db, cloudinary) => {
  app.get("/api/characters", (req, res) => {
    Character.find()
      .then(characters => {
        res.send({
          message: "OK",
          characters
        });
      })
      .catch(err => {
        res.status(404).send(err);
      });
  });

  app.get("/api/characters/:id", (req, res) => {
    const id = req.params.id;

    Character.findOne({
        _id: id
      })
      .then(character => {
        res.send({
          message: "OK",
          character
        });
      })
      .catch(err => {
        res.status(404).send(err);
      });
  });

  app.post("/api/deletecharacter", (req, res) => {
    const id = req.body.id;
    console.log("Delete character", id);
    Character.findByIdAndRemove(id)
      .then(result => {
        console.log("Delete result", result)
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify({
          status: "OK"
        }));
      })
      .catch(err => {
        console.log("Error updating character", err);
        res.status(404).send();
      });
  });

  app.post("/api/changecharacter", (req, res) => {
    console.log("Change Character", req.body.character);

    const id = req.body.character._id;

    Character.findByIdAndUpdate(id, {
        name: req.body.character.name,
        image: req.body.character.image,
        description: req.body.character.description
      })
      .then(result => {
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify({
          status: "OK"
        }));
      })
      .catch(err => {
        console.log("Error updating character", err);
        res.status(404).send();
      });
  });

  app.post("/api/character", (req, res) => {
    console.log("CREATE CHARACTER");
    const character = new Character({
      name: req.body.character.name,
      description: req.body.character.description,
      image: req.body.character.image
    });

    console.log(character);

    character
      .save()
      .then(c => {
        console.log("Create charater OK!!");
        res.json({
          message: "Character saved",
          character: character
        });
      })
      .catch(e => {
        console.log("Error creating character", e);
        res.status(500).send({
          message: "Error saving character"
        });
      });
  });
};

module.exports = {
  character
};
