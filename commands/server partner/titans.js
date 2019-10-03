const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const emote = require("../../emojis.json")
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;



module.exports.run = async (bot, message, args, prefix) => {
  if(message.author.id != serverownerID) return;
  message.delete()
  var server_name = [
    'The Official Discord Of TITANS!'
  ]
  var terms_of_service = [
    'Discord Terms of Service'
  ]

  var community_guidlines = [
    'Community Guidelines'
  ]

  var discord_link1 = server_name[Math.round(Math.random() * (server_name.length - 1))];
  var discord_link2 = terms_of_service[Math.round(Math.random() * (terms_of_service.length - 1))];
  var discord_link3 = community_guidlines[Math.round(Math.random() * (community_guidlines.length - 1))];

  let server_partnerEmbed = new Discord.RichEmbed()

    .setAuthor(`TITANS`)
    .setDescription(`[${discord_link1}](https://discord.gg/BDcgacj)\n
    Our server is dedicated to the youtuber, TITAN. Join the almighty Legion of TITANS to forge an amazing youtube community with fortnightly events and daily would you rathers. With your help my youtube channel will grow and I will produce amazing content. TITANS can only be made if they are strong, trustworthy and willing to become official members.\n\nhttps://discord.gg/BDcgacj`)
    .setThumbnail('https://cdn.discordapp.com/attachments/609000433171693578/622764096076644372/F3C690E5-F122-49DB-AE35-047B5E35EE31.jpeg')
    // .setImage('BODY IMAGE')
    .setFooter(`Come and Join gand say hello!`, 'https://cdn.discordapp.com/attachments/609000433171693578/622764096076644372/F3C690E5-F122-49DB-AE35-047B5E35EE31.jpeg')

    message.channel.send(`**:zap: TITANS :zap: **`)
    message.channel.send(server_partnerEmbed)
  }


module.exports.config = {
  name: "sp_titans",
  noalias: "No Aliases",
  aliases: [],
  usage: `sp_titans`,
  category: `server partners`,
  description: "shows the titans information server as they are a partner!",
  accessableby: "server owner",
  example: "sp_titans"
}
