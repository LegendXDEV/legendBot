const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const emote = require("../../emojis.json")
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;

module.exports.run = async (bot, message, args, prefix) => {
  if (args.length < 1) return message.channel.send(emote.cross + 'You must input text to be reversed!');
    message.channel.send(args.join(' ').split('').reverse().join(''));
}


module.exports.config = {
  name: "reverse",
  // noalias: "No Aliases",
  aliases: ['backwards'],
  usage: `reverse <word | sentence>`,
  category: `fun`,
  description: "reverse a word or sentence",
  accessableby: "everyone",
  example: "reverse hey"
}
