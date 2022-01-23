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
// const amadeus = new Movie({
//   title: "Amadeus",
//   year: 1986,
//   score: 9.2,
//   rating: "R",
// });

// less common way to instatiate many records (movies in this example), but we can do this w/ insertMany:

Movie.insertMany([
  { title: "Amelie", year: 2001, score: 8.3, rating: "R" },
  { title: "Alien", year: 1979, score: 8.1, rating: "R" },
  { title: "The Iron Giant", year: 1999, score: 7.5, rating: "PG" },
  { title: "Stand By Me", year: 1986, score: 8.6, rating: "R" },
  { title: "Moonrise Kingdom", year: 2012, score: 7.3, rating: "PG-13" },
]).then((data) => {
  console.log("works!");
  console.log(data);
});
