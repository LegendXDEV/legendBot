const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix
const work = botconfig.work;
const request = require('request');


module.exports.run = async (bot, message, args) => {

  let msg = await message.channel.send("Generating...")

      request({ uri: "http://shibe.online/api/birds", json: true }, (error, response, body) => {
        if (error) throw new Error(error);
           let embed = new Discord.RichEmbed()
           .setColor("#00ff00")
           .setAuthor(`${bot.user.username} Birds!`, message.guild.iconURL)
           .setImage(body[0])
           .setTimestamp()
           .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)

               msg.edit(embed)
       })
}

module.exports.config = {
  name: "bird",
  // noalias: "No Aliases",
  aliases: ["birds"],
  usage: `bird`,
  category: `images`,
  description: "sends a image of a bird!",
  accessableby: "everyone",
  example: "bird"
}
