const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const emote = require("../../emojis.json")
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;

module.exports.run = async (bot, message, args, prefix) => {
  let unverifiedRole = message.guild.roles.find("name", "Unverified");
  let verifiedRole = message.guild.roles.find("name", "Member");
  const statues = ["online", "dnd", "idle"];
  let memberCount = new Discord.RichEmbed()
  .setColor("#00ff00")
  .addField("Total", `:beginner:${message.guild.members.size}`, true)
  .addField("Humans", `${emote.user}${message.guild.members.filter(member => !member.user.bot).size}`, true)
  .addField("Online", `${emote.online}${message.guild.members.filter(m => statues.includes(m.user.presence.status)).size}`, true)
  .addField("Verified Users", `${emote.tick}${verifiedRole.members.size}`, true)
  .addField("Unverified Users", `${emote.cross}${unverifiedRole.members.size}`, true)
  .addField("Bots", `:robot:${message.guild.members.filter(member => member.user.bot).size}`, true)

  message.channel.send(memberCount)

};
module.exports.config = {
  name: "membercount",
  noalias: "No Aliases",
  aliases: [],
  usage: `membercount`,
  category: `information`,
  description: "information on the servers member count!",
  accessableby: "everyone",
  example: "membercount"
}
