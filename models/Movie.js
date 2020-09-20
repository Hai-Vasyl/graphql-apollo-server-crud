const { Schema, model, Types } = require("mongoose")

const schema = new Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  director: { type: Types.ObjectId, ref: "Director", required: true },
})

module.exports = model("Movie", schema)
