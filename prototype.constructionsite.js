const log = require("log");
module.exports = function () {

  ConstructionSite.prototype.initialize =
    function() {
      this.room.memory.thing[this.id] = {
        tasks: {}
      };
      if (this.structureType == STRUCTURE_CONTAINER) {
        const controller = this.room.controller;
        if (this.pos.getRangeTo(controller) <= 3) {
          this.room.memory.thing[controller.id].container = this.id;
        }
        const sources = this.room.find(FIND_SOURCES);
        for (const s of sources) {
          if (this.pos.getRangeTo(s) <= 2) {
            this.room.memory.thing[s.id].container = this.id;
          }
        }
      }
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
