// Description:
//   answers question hello?
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot hello?  - returns a message about toast

module.exports = function(robot) {
    robot.respond(/hello\s?\?/i, function(msg){
        msg.reply("Howdy doodly do! Anyone like any toast?");
    });
}
