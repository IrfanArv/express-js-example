"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _categoryRoutes = _interopRequireDefault(require("./category.routes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.use('/', _categoryRoutes.default);
var _default = router;
exports.default = _default;