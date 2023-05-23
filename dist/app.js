"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));
var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cors = _interopRequireDefault(require("cors"));
var _helmet = _interopRequireDefault(require("helmet"));
var _morgan = _interopRequireDefault(require("morgan"));
var _indexRoutes = _interopRequireDefault(require("./routes/index.routes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
const app = (0, _express.default)();
const port = process.env.PORT;
const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};
const main = async () => {
  app.use((0, _morgan.default)('dev'));
  app.use(_bodyParser.default.urlencoded({
    extended: false
  }));
  app.use(_bodyParser.default.json());
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
  });
  app.use((0, _cors.default)(corsOptions));
  app.use((0, _helmet.default)());
  app.use(_indexRoutes.default);
  app.use('*', (req, res) => res.status(404).send('404 Not Found'));
  app.listen(port, () => console.log(`App listening on port ${port}`));
};
main();