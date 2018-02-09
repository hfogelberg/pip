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
      title: req.body.artwork.title,
      comment: req.body.artwork.comment,
      isPriority: req.body.artwork.isPriority,
      display: req.body.artwork.display,
      image: req.body.artwork.image
    });

    artwork
      .save()
      .then(art => {
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
