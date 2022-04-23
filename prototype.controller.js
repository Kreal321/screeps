const log = require("log");
module.exports = function () {

  StructureController.prototype.initialize =
    function() {
      this.room.memory.thing[this.id] = {
        tasks: {}
      }
      log.info("Controller of Room " + this.room.name + " initialized");  
    };

  StructureController.prototype.status =
    function() {
      // const tasks = this.room.memory.thing[this.id].tasks;
      // var change = 0;
      // for(const task of Object.values(tasks)) {
      //   change += task.changes;
      // }
      // return 5 + change;
    }

};
