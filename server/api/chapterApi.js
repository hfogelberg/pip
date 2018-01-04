const { Chapter } = require("../models/chapterModel"),
  multer = require("multer"),
  upload = multer({ dest: "uploads/" });

let chapter = (app, db, cloudinary) => {
  app.post("/api/page", upload.single("image"), (req, res, next) => {
    const source = `./uploads/${req.file.filename}`;

    cloudinary.uploader.upload(source, function(result) {
      if (result.error) {
        console.log("Cloudinary upload error", result);
        res.status(500).send();
      }

      const fileName = result.public_id + ".jpg";
      const chapterId = req.body.chapterId;
      const page = {
        text: req.body.text,
        pageNumber: req.body.pageNumber,
        image: fileName
      };

      Chapter.findByIdAndUpdate(chapterId, { $push: { pages: page } })
        .then(result => {
          console.log("Insert page OK");
          res.setHeader("Content-Type", "application/json");
          res.send(JSON.stringify({ status: "OK" }));
        })
        .catch(err => {
          console.log("Error adding page", err);
          res.status(404).send();
        });
    });
  });

  app.get("/api/chapters/:id", (req, res) => {
    const id = req.params.id;
    console.log(`Chapter id ${id}`);

    Chapter.findOne({ _id: id })
      .then(chapter => {
        console.log("Found chapter", chapter);
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify({ status: "OK", chapter: chapter }));
      })
      .catch(err => {
        console.log(`Error fetching character: ${err}`);
        res.status(500).send({ err });
      });
  });

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
