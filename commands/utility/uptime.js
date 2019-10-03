const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const emote = require("../../emojis.json")
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;


module.exports.run = async (bot, message, args, prefix) => {

    function duration(ms) {
    const sec = Math.floor((ms / 1000) % 60).toString()
    const min = Math.floor((ms / (1000 * 60)) % 60).toString()
    const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
    const day = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
    return `**${day.padStart(1, '0')}** days, **${hrs.padStart(2, '0')}** hours, **${min.padStart(2, '0')}** minutes, **${sec.padStart(2, '0')}** seconds`
  }

  message.channel.send(`I have been on online for: ${duration(bot.uptime)}`)

}

module.exports.config = {
  name: "uptime",
  noalias: "No Aliases",
  aliases: [],
  usage: `uptime`,
  category: `Utilty`,
  description: "shows how long the bot has been online for.",
  accessableby: "everyone",
  example: "uptime"
  }
