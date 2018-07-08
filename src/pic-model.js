'use strict';


import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const picSchema = new mongoose.Schema({
  title: {type: String, required: true},
  picUrl: {type: String, required: true},
  user: {type: Schema.Types.ObjectId, ref: 'User'},
});

export default mongoose.model('Picture', picSchema);