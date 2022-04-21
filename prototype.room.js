const log = require("log");
module.exports = function () {

  Room.prototype.initialize =
    function() {
      this.memory.thing = {};
      log.info("Room: " + this.name + " initialized");  
      for (const source of this.find(FIND_SOURCES)) {
        this.memory.thing[source.id] = {
            tasks: {}
        }
        log.info("Room source: " + source.id + " initialized");  
      }
    };

};
