const mongoose = require("mongoose");
const Schema = mongoose.Schema; //to use Schema name instead of mongoose.Schema

//Creation of Schema
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename:String,
    // type: String,
    url:{
      type:String,
       //setting of default link in img
      default:
      "https://unsplash.com/photos/aerial-photography-of-green-mountain-beside-body-of-water-under-white-sky-prSogOoFmkw",
      set: (v) =>
      v === ""
        ? "https://unsplash.com/photos/aerial-photography-of-green-mountain-beside-body-of-water-under-white-sky-prSogOoFmkw"
        : v, //ternary operator
    },
   
  },
  price: Number,
  location: String,
  country: String,
});

//Model Creation
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
