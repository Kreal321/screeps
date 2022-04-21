module.exports = function () {

  StructureContainer.prototype.initialize =
    function() {
      if(this.room.memory.container == undefined) {
        this.room.memory.container = {}
      }
      const controller = this.room.controller;
      if (this.pos.getRangeTo(controller) <= 3) {
        this.room.memory.container[this.id] = {
          target: controller.id,
          targetType: "controller"
        };
        return;
      }
      const sources = this.room.find(FIND_SOURCES);
      for (const s of sources) {
        if (this.pos.getRangeTo(s) <= 2) {
          this.room.memory.container[this.id] = {
            target: s.id,
            targetType: "energySource"
          };
          return;
        }
        console.log(s)
      }
      console.log("error")
    };

};
