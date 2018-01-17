const { Chapter } = require("./models/chapterModel");

let chapter = (app, db, cloudinary) => {
  app.post("/api/changepage", (req, res) => {
    const chapterId = req.body.chapterId;
    const pageId = req.body._id;
    const text = req.body.text;
    const pageNumber = req.body.pageNumber;
    const image = req.body.image;

    // const query = { _id: chapterId, "pages._id": pageId };
    const query = { "pages._id": pageId };
    const set = {
      $set: page
    };

    Chapter.findOne({ _id: chapterId })
      .then(chapter => {
        console.log("*** Chapter found ***", chapter);
        const page = chapter.pages.id(pageId);
        console.log("*** Page found ***", page);
        page.text = text;
        page.pageNumber = pageNumber;
        page.image = image;

        page
          .save()
          .then(result => {
            res.setHeader("Content-Type", "application/json");
            res.send(JSON.stringify({ status: "OK" }));
          })
          .catch(err => {
            console.log("Error updating page", err);
            res.status(500).send({ err });
          });
      })
      .catch(err => {
        console.log("Error updating page", err);
        res.status(500).send({ err });
      });
  });

  app.get("/api/numpages/:id", (req, res) => {
    const id = req.params.id;

    Chapter.findOne({ _id: id })
      .then(chapter => {
        const numPages = chapter.pages.length;
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify({ status: "OK", numPages: numPages }));
      })
      .catch(err => {
        console.log(`Error fetching chapter: ${err}`);
        res.status(500).send({ err });
      });
  });

  app.post("/api/page", (req, res) => {
    console.log("Add page", req.body);
    const chapterId = req.body.chapterId;
    const page = {
      text: req.body.text,
      pageNumber: req.body.pageNumber,
      image: req.body.image
    };

    Chapter.findByIdAndUpdate(chapterId, { $push: { pages: page } })
      .then(result => {
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify({ status: "OK" }));
      })
      .catch(err => {
        console.log("Error adding page", err);
        res.status(404).send();
      });
  });

  app.get("/api/chapters/:id", (req, res) => {
    const id = req.params.id;

    Chapter.findOne({ _id: id })
      .then(chapter => {
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify({ status: "OK", chapter: chapter }));
      })
      .catch(err => {
        console.log(`Error in chapters/:id: ${err}`);
        res.status(500).send({ err });
      });
  });

  app.get("/api/chapternames", (req, res) => {
    const id = req.params.id;

    Chapter.find()
      .select({ title: 1 })
      .then(chapter => {
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify({ status: "OK", names: chapter }));
      })
      .catch(err => {
        console.log(`Error fetching chapternames: ${err}`);
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

  app.post("/api/chapter", (req, res) => {
    const chapter = new Chapter({
      title: req.body.title,
      image: req.body.image
    });

    chapter
      .save()
      .then(c => {
        res.json({ message: "Chapter saved", chapter: chapter });
      })
      .catch(e => {
        console.log(e);
        res.status(500).send({ message: "Error saving chapter" });
      });
  });
};

module.exports = { chapter };
