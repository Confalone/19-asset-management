'use strict';

import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  userID: { type: String},
  faveColor: {type: String, required: true},
  faveCookie: {type: String, required: true},
});
  
export default mongoose.model('Profile', profileSchema);

