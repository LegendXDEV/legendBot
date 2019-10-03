const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix;
const work = botconfig.work;


module.exports.run = async (bot, message, args) => {

  const cowsay = require("cowsay");
  let text = args.join(" ");
  message.channel.send("```" + cowsay.say({
    text: text
  }) + "```")

}

module.exports.config = {
  name: "cowsay",
  noalias: "No Aliases",
  aliases: [],
  usage: `cowsay <text>`,
  category: `fun`,
  description: "a cow will send a message of what ever you send.",
  accessableby: "everyone",
  example: "cowsay what's up dude."
}
