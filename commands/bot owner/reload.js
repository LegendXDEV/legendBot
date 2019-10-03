const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const emote = require("../../emojis.json")
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;


module.exports.run = async (bot, message, args, prefix) => {

  if(message.author.id != botownerID) return message.channel.send("Only the **Bot Owner** can use this command")

  let reloadHelp = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(`Reload HELP!`)
  .setDescription(`reload comes with different arguments\n
    ${emote.arrowright}${prefix}**reload-bo <command>** = reload __Bot Owner__ <command>
    ${emote.arrowright}${prefix}**reload-admin <command>** = reload __Administrator__ <command>
    ${emote.arrowright}${prefix}**reload-info <command> **= reload __Information__ <command>
    ${emote.arrowright}${prefix}**reload-util <command> **= reload __Utility __<command>
    ${emote.arrowright}${prefix}**reload-sp <command> **= reload __Server Partner__ <command>
    ${emote.arrowright}${prefix}**reload-fun <command> **= reload __Fun__ <command>
    ${emote.arrowright}${prefix}**reload-img <command> **= reload __Image__ <command>
    `)
  .setFooter(`Reload help`)
  .setTimestamp()
  message.channel.send(reloadHelp)

     }
module.exports.config = {
    name: "reload",
    noalias: "No Aliases",
    aliases: [],
    usage: `reload`,
    category: `Owners`,
    description: "reload command info help",
    accessableby: "Bot Owner",
    example: "reload"
}
