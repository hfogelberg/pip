const { Character } = require("./models/characterModel"),
  multer = require("multer"),
  upload = multer({ dest: "./tmp" });

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

  app.post("/api/character", upload.single("image"), (req, res, next) => {
    const source = `./uploads/${req.file.filename}`;

    cloudinary.uploader.upload(source, function(result) {
      if (result.error) {
        console.log("Cloudinary upload error", result);
        res.status(500).send();
      }

      console.log("Cloudinary result", result);

      const fileName = result.public_id + ".jpg";

      const character = new Character({
        name: req.body.name,
        description: req.body.description,
        image: fileName
      });

      character
        .save()
        .then(c => {
          res.json({ message: "Character saved", character: character });
        })
        .catch(e => {
          console.log(e);
          res.status(500).send({ message: "Error saving character" });
        });
    });
  });
};

module.exports = { character };
