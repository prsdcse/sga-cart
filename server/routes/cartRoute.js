const express = require('express');
const CartController = require('./../controllers/CartController');

let cart = express.Router();
cart.get("/add/:owner/:itemID", CartController.cartAdjustmentMiddleware(true));
cart.get("/remove/:owner/:itemID", CartController.cartAdjustmentMiddleware(false));
cart.use(["/validate/:owner", "/:owner"], CartController.ownerMiddleware);
cart.get("/validate/:owner", CartController.validateByOwner);
cart.get("/:owner", CartController.getCartOwner);

module.exports = cart;
