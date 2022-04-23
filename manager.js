const log = require("log");

module.exports =  
    class Manager {
        maxCPU = 20;
        // initialize managerk
        constructor(spawn) {
            this.currentCPU = Game.cpu.getUsed();
            this.rooms = [Game.spawns[spawn].room];
            for(const room of this.rooms) {
                if(room.memory.thing == undefined) {
                    room.initialize();
                }
            }
            log.info("Manager Initialized.");
        }

        run() {
            this.currentCPU = Game.cpu.getUsed();
            

            for(const room of this.rooms) {

                // find creeps with no work in each room
                this.freeCreeps = room.find(FIND_CREEPS, {
                    filter: (creep) => {
                        if (creep.memory.body == undefined) creep.initialize();
                        return creep.memory.task.length == 0;
                    }
                });
                log.debug("freeCreeps: " + this.freeCreeps.length);

                // find sources container and assign transfer energy task check status
                this.freeSources = room.find(FIND_SOURCES, {
                    filter: (source) => {
                        return Object.keys(room.memory.thing[source.id].tasks).length == 0;
                    }
                });
                log.debug("freeSources: " + this.freeSources.length);
            

                // find construction sites and assign task
                this.constructionsite = room.find(FIND_CONSTRUCTION_SITES);
                for(const c of _.filter(this.constructionsite, (source) => {
                    return room.memory.thing[source.id] == undefined;
                })) {
                    c.initialize();
                }
                log.debug("freeConstruction: " + this.constructionsite.length);

                for(const c of this.constructionsite) {
                    log.debug(c.id + ": " + c.status());
                }

                // find dropped energy and assign transfer energy task

                // find spawn and assign task
                // create new creeps if needed


            }
        }

        getOneCreep(type) {
            if(!this.freeCreeps.length > 0) return null;
            var creeps = _.filter(this.freeCreeps, (c) => { return c.memory.role == type});
            if(creeps.length > 0) return creeps.shift();
            switch(type) {
                case "harvest":
                    creeps = _.sortBy(this.freeCreeps, (c) => { return c.memory.body.work})
                    return creeps.shift();

                default:

                    return this.freeCreeps.shift();
            }
        }
    }

