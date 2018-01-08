let isLocal = false;
if (process.env.NODE_ENV == "development") {
  isLocal = true;
}

const PORT = isLocal ? 3000 : 8080;
const CLOUDINARY_ROOT_URL = "http://res.cloudinary.com/golizzard/image/upload/";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/golizzard/upload";
const CLOUDINARY_CLOUD_NAME = "golizzard";
const CLOUDINARY_API_KEY = "925374862654622";
const CLOUDINARY_API_SECRET = "doHBawwQUw7L2vYVKq5Dl9wbdUE";
const CLOUDINARY_UPLOAD_PRESET = "m3kh8ujo";
const GOOGLE_CLIENT_ID =
  "117735353954-8cpgiuhrfol5rlunnq99nfrhfe96lu0o.apps.googleusercontent.com";
const GOOGLE_CALLBACK_URL = isLocal
  ? "http://localhost:8080/callback/google"
  : "pip.henrikfogelberg.com/callback/google";

module.exports = {
  CLOUDINARY_ROOT_URL,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_UPLOAD_URL,
  CLOUDINARY_UPLOAD_PRESET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CALLBACK_URL,
  PORT,
  CLOUDINARY_UPLOAD_URL
};
