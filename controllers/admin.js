const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product
    .save()
    .then((results) => {
      console.log("product Created");
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then((products) => {
      res.render("admin/products", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
    })
    .then((err) => console.log(err));
};

// exports.getEditProduct = (req, res, next) => {
//   const edit = req.query.edit;
//   console.log(edit);
//   if (!edit) {
//     return res.redirect("/");
//   }
//   const prodId = req.params.productId;
//   Product.findById(prodId, (p) => {
//     if (!p) {
//       return res.redirect("/");
//     }
//     res.render("admin/edit-product", {
//       pageTitle: "Edit Product",
//       path: "/admin/edit-product",
//       product: p,
//     });
//   });
// };

// exports.postEditProduct = (req, res, next) => {
//   const prodId = req.body.prodId
//   const updatedtitle = req.body.title;
//   const updatedimageUrl = req.body.imageUrl;
//   const updatedprice = req.body.price;
//   const updateddescription = req.body.description;
//   const product = new Product(prodId, updatedtitle, updatedimageUrl, updateddescription, updatedprice);
//   product.save();
//   res.redirect("/admin/products");
// }

// exports.deleteProduct = (req, res, next) => {
//   const prodId = req.body.prodId
//   Product.deleteProduct(prodId);
//   res.redirect("/admin/products");
// }
