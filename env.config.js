require('dotenv').config();

const {
  DB_PASSWORD,
  SESSION_SECRET,
  TWITTER_API_KEY,
  TWITTER_API_SECRET,
} = process.env;

module.exports = {
  DB_PASSWORD,
  SESSION_SECRET,
  TWITTER_API_KEY,
  TWITTER_API_SECRET,
}