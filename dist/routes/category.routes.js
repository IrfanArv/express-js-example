"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _index = require("../controllers/category/index.js");
var _validationMiddleware = require("../middlewares/validation.middleware.js");
const categoryRoutes = (0, _express.Router)();
categoryRoutes.post('/category', _validationMiddleware.validateName, _index.create);
categoryRoutes.get('/category', _index.findAll);
categoryRoutes.get('/category/:id', _validationMiddleware.validateId, _index.findOne);
categoryRoutes.patch('/category/:id', _validationMiddleware.validateId, _index.updateData);
categoryRoutes.delete('/category/:id', _validationMiddleware.validateId, _index.deleteData);
var _default = categoryRoutes;
exports.default = _default;