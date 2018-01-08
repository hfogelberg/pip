let settings = app => {
  app.get("/api/settings", (req, res) => {
    const {
      CLOUDINARY_ROOT_URL,
      CLOUDINARY_CLOUD_NAME,
      CLOUDINARY_API_KEY,
      CLOUDINARY_UPLOAD_URL,
      CLOUDINARY_API_SECRET,
      CLOUDINARY_UPLOAD_PRESET,
      GOOGLE_CLIENT_ID,
      GOOGLE_CALLBACK_URL
    } = require("../settings.js");

    const settings = {
      cloudinaryRootUrl: CLOUDINARY_ROOT_URL,
      cloudinaryKey: CLOUDINARY_API_KEY,
      cloudinarySecret: CLOUDINARY_API_SECRET,
      cloudinaryUploadUrl: CLOUDINARY_UPLOAD_URL,
      cloudinaryUploadPreset: CLOUDINARY_UPLOAD_PRESET,
      googleClientId: GOOGLE_CLIENT_ID,
      googleCallbackUrl: GOOGLE_CALLBACK_URL
    };

    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ settings }));
  });
};

module.exports = { settings };
