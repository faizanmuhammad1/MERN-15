const productServices = require('../services/Product.service');

async function getHome(req, res) {

    try {
        res.status(200).json({ message: "Welcome to the home page" });
    } catch (er) {
        res.status(500).json({ message: "Error getting home page", error: er.message });
    }

}

async function addProduct(req, res) {
    const productData = req.body;
    try {
        const newProduct = await productServices.addProduct(productData);
        res.status(201).json({ message: "Successfully inserted productData", product: newProduct });
    } catch (er) {
        res.status(500).json({ message: "Error creating product", error: er.message });
    }

}

async function addManyProduct(req, res) {
    const productsData = req.body;
    try {
        const newProducts = await productServices.addManyProduct(productsData);
        res.status(201).json({ message: "Successfully inserted productsData", product: newProducts });
    } catch (er) {
        res.status(500).json({ message: "Error creating product", error: er.message });
    }

}

async function getProducts(req, res) {
    try {
        const products = await productServices.getProducts();
        res.status(201).json(products);
    } catch (er) {
        res.status(500).json({ message: "Products not found ", error: er.message })
    }

}

async function deleteProduct(req, res) {
    try {
        const productId = req.params.id;
        const deleteMessage = await productServices.deleteProduct(productId);
        res.status(200).json({ message: deleteMessage });
    } catch (er) {
        res.status(500).json({ message: "Error deleting product", error: er.message });
    }
}

async function deleteMany(req, res) {
    try {
        const deleteMessage = await productServices.deleteMany();
        res.status(200).json({ message: deleteMessage });
    } catch (er) {
        res.status(500).json({ message: "Error deleting product", error: er.message });
    }
}

async function updateProduct(req, res) {
    const productId = req.params.id;
    const updateData = req.body;
    try {
        const updateMessage = await productServices.updateProduct(productId, updateData);
        res.status(200).json({ message: updateMessage });
    } catch (er) {
        res.status(500).json({ message: "Error updating product", error: er.message });
    }
}

module.exports = {
    getHome,
    addProduct,
    addManyProduct,
    getProducts,
    deleteProduct,
    deleteMany,
    updateProduct
}

