const { Character } = require("./models/characterModel");

let character = (app, db, cloudinary) => {
  app.get("/api/characters", (req, res) => {
    Character.find()
      .then(characters => {
        res.send({ message: "OK", characters });
      })
      .catch(err => {
        res.status(404).send(err);
      });
  });

  app.get("/api/character/:id", (req, res) => {
    const id = req.params.id;

    Character.findById({ id })
      .then(character => {
        res.send({ message: "OK", character });
      })
      .catch(err => {
        res.status(404).send(err);
      });
  });

  app.post("/api/character", (req, res) => {
    console.log("CREATE CHARACTER");
    const character = new Character({
      name: req.body.character.name,
      description: req.body.character.description,
      image: req.body.character.file
    });

    console.log(character);

    character
      .save()
      .then(c => {
        console.log("Create charater OK!!");
        res.json({ message: "Character saved", character: character });
      })
      .catch(e => {
        console.log("Error creating character", e);
        res.status(500).send({ message: "Error saving character" });
      });
  });
};

module.exports = { character };
