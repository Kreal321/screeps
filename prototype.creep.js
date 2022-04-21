const log = require("log");
module.exports = function () {

  Creep.prototype.initialize =
    function() {
      var body = {};
      for (const part of this.body) {
        if(body[part.type] == undefined) {
          body[part.type] = 1;
        } else {
          body[part.type] += 1;
        }
      }
      this.memory = {
        role: "",
        body: body,
        task: []
      };
      log.info("Creep: " + this.name + " initialized. Its body " + JSON.stringify(body));  
    
    };

};
