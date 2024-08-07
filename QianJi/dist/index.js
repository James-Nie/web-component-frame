"use strict";
exports.__esModule = true;
exports.prefix = exports.createRouter = exports.Route = exports.tag = exports.styles = exports.install = exports.register = exports.useState = exports.Components = void 0;
var core_1 = require("./core");
exports.Components = core_1["default"];
var useState_1 = require("./useState");
exports.useState = useState_1.useState;
var router_1 = require("./router");
exports.Route = router_1["default"];
exports.createRouter = router_1.createRouter;
var utils_1 = require("./utils");
exports.register = utils_1.register;
exports.install = utils_1.install;
var decorators_1 = require("./decorators");
exports.styles = decorators_1.styles;
exports.tag = decorators_1.tag;
var constant_1 = require("./constant");
exports.prefix = constant_1.prefix;
