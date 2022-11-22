const mongoose = require("mongoose");

const AnimalSchema = new mongoose.Schema({
  // imgURL:{
  //   type: String,
  // },
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"],
    trim: true,
    lowercase: true,
  },

  breed: {
    type: String,
  },
  
  age: {
    type: Number,
    default: 0,
    min:[0, "Age should not be negative"],
    max: 30,
  },

  gender: {
    type: String,
    enum: ["male", "female"],
    required: [true, "why no gender?"],
  },
  
  weight: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("Negative weight isn't real.");
    },
  },

  color:{
    type: String,
    enum: {
      values:["tabby", "white", "black", "orange", "blue", "lilac", "lavender", "other"],
      message: '{VALUE} is not supported'
    },
  },

  coatLength:{
    type: String,
    enum: ["long", "short", ,"medium","no hair", "Invalid lenghth"],
  },

  goodWith:{
   type: String,
   enum: {
     values: ["cats", "dogs", "kids", "longterm residents", "Indoor/outdoor"],
     message:'{VALUE} is not supported'
   },
 },
});



const Animal = mongoose.model("Animal", AnimalSchema);

module.exports = Animal;
