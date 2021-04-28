const products = require('../products.json')

const getProducts = (req, res) => {
    // const items = products.find((val) => val.id === +req.params.id)
    if(req.query.price) {
        const items = products.filter((val) => val.price >= +req.query.price)
    return res.status(200).send(items)
    }
    res.status(200).send(products)
}

module.exports = getProducts
