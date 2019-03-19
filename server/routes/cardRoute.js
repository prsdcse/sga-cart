const express = require('express');
const CardController = require('./../controllers/CardController');

let card = express.Router();
card.use(["/validate/:owner", "/charge/:owner"], CardController.ownerMiddleware);
card.get("/validate/:owner", CardController.validateOwner);
card.get("/charge/:owner", CardController.chargeOwner);

module.exports = card;
