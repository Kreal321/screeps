module.exports = function () {
  StructureSpawn.prototype.createNewCreep =
    function(roleName, energy = 200) {

      var containers = this.room.find(FIND_STRUCTURES, {filter: {structureType: STRUCTURE_CONTAINER}});
      var newName = roleName + Game.time;
      console.log('Spawning new ' + newName);

      if (roleName === "harvester" && this.room.energyAvailable >= 700) {
        return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,MOVE,MOVE,MOVE], newName, {memory: {role: roleName, target: null, targetType: null}});
      }

      if (roleName === "harvester" && this.room.energyAvailable >= 500) {
        return this.spawnCreep([WORK,WORK,WORK,WORK,MOVE,MOVE], newName, {memory: {role: roleName, target: null, targetType: null}});
      }

      if (roleName === "harvester") {
        return this.spawnCreep([WORK,WORK,MOVE], newName, {memory: {role: roleName, target: null, targetType: null}});
      }

      if (roleName === "mover" && this.room.energyAvailable >= 800) {
        return this.spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,WORK,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE], newName, {memory: {role: roleName, target: null, targetType: null}});
      }
      
      if (roleName === "mover" && this.room.energyAvailable >= 400) {
        return this.spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], newName, {memory: {role: roleName, target: null, targetType: null}});
      }

      if (roleName === "mover" && this.room.energyAvailable >= 200) {
        return this.spawnCreep([CARRY,CARRY,MOVE,MOVE], newName, {memory: {role: roleName, target: null, targetType: null}});
      }

      if (roleName === "upgrader" && this.room.energyAvailable >= 300) {
        return this.spawnCreep([CARRY,WORK,WORK,MOVE], newName, {memory: {role: roleName, target: null, targetType: null}});
      }

      if (roleName === "builder" && this.room.energyAvailable >= 300) {
        return this.spawnCreep([CARRY,WORK,WORK,MOVE], newName, {memory: {role: roleName, target: null, targetType: null}});
      }
      
      var numParts = Math.floor(energy / 300);
      var body = [];
      for (let i = 0; i < numParts; i++) {
        body.push(WORK, WORK);
      }
      for (let i = 0; i < numParts; i++) {
        body.push(CARRY);
      }
      for (let i = 0; i < numParts; i++) {
        body.push(MOVE);
      }

      return this.spawnCreep(body, newName, {memory: {role: roleName, target: null, targetType: null}});
      
    };
};
