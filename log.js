const level = 2; // 0: error, 1: info, 2: debug
module.exports = {
    email: function (message) {
        Gamepad.notify(message);
        console.log("Send message: " + message);
    },
    error: function (message) {
        if (level >= 0) console.log("ERROR: " + message);
    },
    info: function (message) {
        if (level >= 1) console.log("Info: " + message);
    },
    debug: function (message) {
        if (level >= 2) console.log("Debug: " + message);
    }
}

