"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateName = exports.validateId = void 0;
var _expressValidator = require("express-validator");
const validateName = [(0, _expressValidator.body)('name').trim().notEmpty().withMessage('Nama tidak boleh kosong').isLength({
  min: 3
}).withMessage('Nama harus memiliki panjang minimal 3 karakter'), (req, res, next) => {
  const errors = (0, _expressValidator.validationResult)(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      statusCode: 400,
      message: 'Bad request',
      errors: errors.array()
    });
  }
  next();
}];
exports.validateName = validateName;
const validateId = [(0, _expressValidator.param)('id').notEmpty().isUUID().withMessage('Invalid ID'), (req, res, next) => {
  const errors = (0, _expressValidator.validationResult)(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      statusCode: 400,
      message: 'Bad request',
      errors: errors.array()
    });
  }
  next();
}];
exports.validateId = validateId;