const router = require('express').Router();
let stock = require('../Models/stock');

router.post(('/'), async(req, res) => {
    const image = req.body.image;
    const category = req.body.category;
    const title = req.body.title;
    const quantity = req.body.quantity;
    const totalStock = req.body.totalStock;
    const units = req.body.units;
    const price = req.body.price;
    const description = req.body.description;
    const company = req.body.company;
    const origin = req.body.origin;

    const newStockData = {
        image,
        category,
        title,
        quantity,
        totalStock,
        units,
        price,
        description,
        company,
        origin
    }
    console.log(newStockData);
    stock(newStockData).save((err, result) => {
    if (err) console.log(err);
    res.status(201).json(result);
  });
});

module.exports = router;