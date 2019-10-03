const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const emote = require("../../emojis.json")
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;


module.exports.run = async (bot, message, args, prefix) => {


const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;

message.channel.send(`ID: \`${member.user.id}\`.`);
}
  module.exports.config = {
    name: "id",
    noalias: "No Aliases",
    aliases: [],
    usage: `id <user>`,
    category: `Utility`,
    description: "get the id of a user!",
    accessableby: "everyone",
    example: "id <@513571036688547871>"
    }
