const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const emote = require("../../emojis.json")
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;

module.exports.run = async (bot, message, args, prefix) => {
  let megustafac = new Discord.RichEmbed()
.setColor("#00ff00")
.setImage("https://cdn.discordapp.com/attachments/424889733043191810/428888675603185666/b710a35966ecbbf7988bf40bb47b0e4d-me-gusta-meme-face-by-vexels.png");

message.channel.send(megustafac)

}


module.exports.config = {
  name: "gusta",
  noalias: "No Aliases",
  aliases: [],
  usage: `gusta`,
  category: `images`,
  description: "gusta memes face!",
  accessableby: "everyone",
  example: "gusta"
}
