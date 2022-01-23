// get this from the docs https://mongoosejs.com/
// changed 'test' to 'moviesDB' and added connection error handling

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/moviesDB")
  .then(() => {
    console.log("connection open");
  })
  .catch((err) => {
    console.log("oh no error");
    console.log(err);
  });

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

// pass in the name of the model, and name of schema
const Movie = mongoose.model("Movie", movieSchema);
const amadeus = new Movie({
  title: "Amadeus",
  year: 1986,
  score: 9.2,
  rating: "R",
});
