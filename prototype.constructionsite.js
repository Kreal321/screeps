const log = require("log");
module.exports = function () {

  ConstructionSite.prototype.initialize =
    function() {
      this.room.memory.thing[this.id] = {
          tasks: {}
        };
      log.info("ConstructionSite: " + this.id + " initialized");
    };

  ConstructionSite.prototype.status =
    function() {
      const tasks = this.room.memory.thing[this.id].tasks;
      var change = 0;
      for(const task of Object.values(tasks)) {
        change += task.changes;
      }
      return this.progress - this.progressTotal + change;
    }

};
