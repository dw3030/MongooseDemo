const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopApp")
  .then(() => {
    console.log("connection open");
  })
  .catch((err) => {
    console.log("oh no error");
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },

  price: {
    type: Number,
    required: true,
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  //   this is how we'd specify an array of strings in the schema
  categories: [String],
  ty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    // emun ensures that value is in the specified array for data validation control
    enum: ["S", "M", "L"],
  },
});

productSchema.methods.greet = function () {
  console.log("hello!");
};

const Product = mongoose.model("Product", productSchema);

const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: "Bike Helmet" });
  foundProduct.greet();
};

// const bike = new Product({ name: "Mountain Bike", price: 599 });
// bike
//   .save()
//   .then((data) => {
//     console.log("it worked!");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("oh no error");
//     console.log(err);
//   });
