const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const emote = require("../../emojis.json")
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;


module.exports.run = async (bot, message, args, prefix) => {


  let msg = await message.channel.send("Generating avatar...");

     let mentionedUser = message.mentions.users.first() || message.author;

         let embed = new Discord.RichEmbed()

         .setImage(mentionedUser.displayAvatarURL)
         .setColor("00ff00")
         .setTitle("Avatar")
         .setFooter("Searched by " + message.author.tag)
         .setDescription("[Avatar URL link]("+mentionedUser.displayAvatarURL+")");

         message.channel.send(embed)
         msg.delete();
      }
  module.exports.config = {
    name: "avatar",
    noalias: "No Aliases",
    aliases: [],
    usage: `avatar <user>`,
    category: `Utility`,
    description: "get the avatar of a user!",
    accessableby: "everyone",
    example: "avatar <@513571036688547871>"
    }
