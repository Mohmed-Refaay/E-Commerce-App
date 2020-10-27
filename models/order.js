const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

const orderScheme = new Scheme({
  products: [
    {
      product: { type: Object, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  user: {
    name: {
      type: String,
      require: true,
    },
    userId: {
      type: Scheme.Types.ObjectId,
      require: true,
      ref: "User",
    },
  },
});


module.exports = mongoose.model("Order", orderScheme)