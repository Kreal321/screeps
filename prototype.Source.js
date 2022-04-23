const log = require("log");
module.exports = function () {

  Source.prototype.initialize =
    function() {
      this.room.memory.thing[this.id] = {
        tasks: {}
      }
      log.info("Room source: " + this.id + " initialized");  
    };

  Source.prototype.status =
    function() {
      const tasks = this.room.memory.thing[this.id].tasks;
      var change = 0;
      for(const task of Object.values(tasks)) {
        change += task.changes;
      }
      return 5 + change;
    }

};
