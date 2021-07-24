import mongoose from 'mongoose';
const imgSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  img: {
    data: Buffer,
    contentType: String
  }
});

export const Image = mongoose.model('Image', imgSchema);
