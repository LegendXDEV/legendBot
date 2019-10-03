const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const emote = require("../../emojis.json")
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;


module.exports.run = async (bot, message, args, prefix) => {

  if(message.author.id != botownerID) return message.channel.send("Only the **Bot Owner** can use this command")

  if(args == "") {
    message.channel.send(`Make sure it is either **dnd**, **online**, **idle**, **invisible**`)
  }

  if(args[0] === 'dnd') {
    bot.user.setStatus('dnd')
    message.channel.send(`${emote.tick} Successfully changed the bots status to **Do Not Disturb**`)
  }

  if(args[0] === 'idle') {
    bot.user.setStatus('idle')
    message.channel.send(`${emote.tick} Successfully changed the bots status to **idle**`)
  }

  if(args[0] === 'online') {
    bot.user.setStatus('online')
    message.channel.send(`${emote.tick} Successfully changed the bots status to default -> **online**`)
  }

  if(args[0] === 'invisible') {
    bot.user.setStatus('invisible')
    message.channel.send(`${emote.tick} Successfully changed the bots status to **invisible**`)
  }

  if(args[0] === 'offline') {
    bot.user.setStatus('invisible')
    message.channel.send(`${emote.tick} Successfully changed the bots status to **invisible**`)
  }

  function emoji(name) {return bot.emojis.find(emoji => emoji.name === name)
}
};


module.exports.config = {
    name: "setstatus",
    noalias: "No Aliases",
    aliases: [],
    usage: `setstatus <status>`,
    category: `Owners`,
    description: "set the bots status | online, invisible, idle, dnd",
    accessableby: "Bot Owner",
    example: "setstatus idle"
}
