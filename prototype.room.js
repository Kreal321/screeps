const log = require("log");
module.exports = function () {

  Room.prototype.initialize =
    function() {
      this.memory.thing = {};
      log.info("Room: " + this.name + " initialized");  
      this.controller.initialize();
      for (const source of this.find(FIND_SOURCES)) {
        source.initialize();
      }
    };

};
