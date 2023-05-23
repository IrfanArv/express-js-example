"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _sequelize = _interopRequireDefault(require("sequelize"));
var _config = _interopRequireDefault(require("../config/config.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const basename = _path.default.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const db = {};
let sequelize;
if (_config.default[env].use_env_variable) {
  sequelize = new _sequelize.default(process.env[_config.default[env].use_env_variable], _config.default[env]);
} else {
  sequelize = new _sequelize.default(_config.default[env].database, _config.default[env].username, _config.default[env].password, _config.default[env]);
}
_fs.default.readdirSync(__dirname).filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js').forEach(file => {
  const model = require(_path.default.join(__dirname, file)).default(sequelize, _sequelize.default.DataTypes);
  db[model.name] = model;
});
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = _sequelize.default;
var _default = db;
exports.default = _default;