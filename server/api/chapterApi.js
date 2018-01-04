const { Chapter } = require("../models/chapterModel"),
  multer = require("multer"),
  upload = multer({ dest: "uploads/" });

let chapter = (app, db, cloudinary) => {
  app.get("/api/chapters", (req, res) => {
    Chapter.find()
      .then(chapters => {
        res.send({ message: "OK", chapters });
      })
      .catch(err => {
        res.status(404).send(err);
      });
  });

  app.post("/api/chapter", upload.single("image"), (req, res, next) => {
    console.log(req.body);
    const source = `./uploads/${req.file.filename}`;

    cloudinary.uploader.upload(source, function(result) {
      if (result.error) {
        console.log("Cloudinary upload error", result);
        res.status(500).send();
      }

      const fileName = result.public_id + ".jpg";

      const chapter = new Chapter({
        title: req.body.title,
        image: fileName
      });

      chapter
        .save()
        .then(c => {
          console.log("Chapter saved");
          res.json({ message: "Chapter saved", chapter: chapter });
        })
        .catch(e => {
          console.log(e);
          res.status(500).send({ message: "Error saving chapter" });
        });
    });
  });
};

module.exports = { chapter };
