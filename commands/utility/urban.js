const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const emote = require("../../emojis.json")
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;

const urban = require('urban');

module.exports.run = async (bot, message, args, prefix) => {
  if(args.length < 1) return message.reply("Please enter something!");
   let XD = args.join(" ");

   urban(XD).first(json => {
       if(!json) return message.reply(`${emote.cross} Couldn't find anything on **${XD}**`)

       let urbEmbed = new Discord.RichEmbed()
       .setColor("00ff00")
       .setTitle(json.word)
       .setDescription(json.definition)
       .addField(`${emote.upvote}Upvotes`, json.thumbs_up, true)
       .addField(`${emote.downvote}Downvotes`, json.thumbs_down, true)
       .setFooter(`Written by: ${json.author}`);

       message.channel.send(urbEmbed)
   });
}


module.exports.config = {
  name: "urban",
  noalias: "No Aliases",
  aliases: [],
  usage: `urban <word>`,
  category: `Utilty`,
  description: "look in the urban dictionary.",
  accessableby: "everyone",
  example: "urban legend"
}
