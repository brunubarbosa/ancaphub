const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    lowercase: true,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: Array,
    required: true,
    default: ['user']
  },
  personalCollection: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
  saved: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
  following: [],
  followers: [],
  birthday: Date,
  avatar: String,
  site: String,
  bio: String,
  currentCity: String,
  lastLocation: Object,
  geoLocation: false
}, { timestamps: true })

UserSchema.index({username: 'text'})

module.exports = mongoose.model('User', UserSchema);