import mongoose from './index.js'; // Ensure correct path to mongoose

const UrlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    required: true,
    unique: true // Ensure that shortId is unique
  },
  originalUrl: {
    type: String,
    required: true
  },
  shortUrl: {
    type: String
  },
  clicks: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
}, 
{
  collection: 'URL',
  versionKey: false
});

export default mongoose.model('Url', UrlSchema);
