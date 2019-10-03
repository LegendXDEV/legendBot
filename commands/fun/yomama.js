const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const emote = require("../../emojis.json")
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;

const yoMamma = require('yo-mamma').default;

module.exports.run = async (bot, message, args, prefix) => {
  let insult = yoMamma();

  message.channel.send(insult)

}


module.exports.config = {
  name: "yomama",
  // noalias: "No Aliases",
  aliases: ['yo-mama'],
  usage: `yomama`,
  category: `fun`,
  description: "a fun yo-mama joke for you!",
  accessableby: "everyone",
  example: "yomama"
}
