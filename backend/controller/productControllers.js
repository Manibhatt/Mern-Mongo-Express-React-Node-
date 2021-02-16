const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  }
  catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
}

const getProductById = async (req, res) => {
  try {
    const product = Product.findById(req.param.id);
    res.json(product);
  }
  catch (error) {

  }
}

module.exports =  {
  getAllProducts,
  getProductById,
}