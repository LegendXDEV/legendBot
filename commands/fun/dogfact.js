const request = require("request");

module.exports.run = async (bot, message, args, prefix) => {

  request({ uri: "https://dog-api.kinduff.com/api/facts", json: true }, (error, response, body) => {
    if (error) throw new Error(error);
    message.channel.send(`🐱 **Did you know?** ${body.facts[0]}`);
  })
  }
module.exports.config = {
    name: "dogfact",
    // noalias: "No Aliases",
    aliases: ["puppyfact"],
    usage: `dogfact`,
    category: `fun`,
    description: "gives you a fact about dogs!",
    accessableby: "everyone",
    example: "dogfact"
}
