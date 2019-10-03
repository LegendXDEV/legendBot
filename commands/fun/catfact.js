const request = require("request");

module.exports.run = async (bot, message, args, prefix) => {

  request({ uri: "https://catfact.ninja/fact", json: true }, (error, response, body) => {
    if (error) throw new Error(error);
    message.channel.send(`🐱 **Did you know?** ${body.fact}`);
  })
  }
module.exports.config = {
    name: "catfact",
    // noalias: "No Aliases",
    aliases: ["kittyfact"],
    usage: `catfact`,
    category: `fun`,
    description: "gives you a fact about cats!",
    accessableby: "everyone",
    example: "catfact"
}
