require("prototype.room")();
require("prototype.creep")();
require("prototype.constructionsite")();
var Manager = require('manager');
const manager = new Manager('Spawn1');

module.exports.loop = function () {
    manager.run();
}