let settings = app => {
  app.get("/api/settings", (req, res) => {
    const {
      CLOUDINARY_ROOT_URL,
      CLOUDINARY_CLOUD_NAME,
      CLOUDINARY_API_KEY,
      CLOUDINARY_API_SECRET,
      GOOGLE_CLIENT_ID,
      GOOGLE_CALLBACK_URL
    } = require("../settings.js");

    const settings = {
      cloudinaryRootUrl: CLOUDINARY_ROOT_URL,
      cloudinaryKey: CLOUDINARY_API_KEY,
      cloudinarySecret: CLOUDINARY_API_SECRET,
      googleClientId: GOOGLE_CLIENT_ID,
      googleCallbackUrl: GOOGLE_CALLBACK_URL
    };

    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ settings }));
  });
};

module.exports = { settings };
