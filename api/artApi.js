const { Artwork } = require("./models/artModel");

let artwork = (app, db, cloudinary) => {
  app.get("/api/artworks", (req, res) => {
    Artwork.find()
      .then(artworks => {
        res.send({ message: "OK", artworks });
      })
      .catch(err => {
        res.status(404).send(err);
      });
  });

  app.post("/api/artwork", (req, res) => {
    let artwork = new Artwork({
      title: req.body.title,
      comment: req.body.comment,
      isPriority: req.body.isPriority,
      display: req.body.display,
      image: req.body.image
    });

    artwork
      .save()
      .then(art => {
        console.log("Create artwork OK!!");
        res.json({
          message: "Artwork saved",
          artwork: art
        });
      })
      .catch(e => {
        console.log("Error creating artwork", e);
        res.status(500).send({
          message: "Error saving artwork"
        });
      });
  });
};

module.exports = { artwork };
