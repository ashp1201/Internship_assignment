// const mongoose=require('mongoose');

const { Schema, model } = require("mongoose");

const DocumentSchema = new Schema({
  _id: String,
  data: Object,
});

module.exports = model("document", DocumentSchema);
