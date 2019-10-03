const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix
const work = botconfig.work;
const fetch = require('node-fetch');


module.exports.run = async (bot, message, args) => {

  let msg = await message.channel.send("Generating...")

          fetch("https://apis.duncte123.me/seal")
          .then(res => res.json()).then(body => {
              if(!body) return message.reply(" whoops. I broke, try again!")

              let embed = new Discord.RichEmbed()
              .setColor("#add8e6")
              .setAuthor(`${bot.user.username} Seal!`, message.guild.iconURL)
              .setImage(body.data.file)
              .setTimestamp()
              .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)

                  msg.edit(embed)
          })
}

module.exports.config = {
  name: "seal",
  noalias: "No Aliases",
  aliases: [],
  usage: `seal`,
  category: `images`,
  description: "sends a image of a seal!",
  accessableby: "everyone",
  example: "seal"
}
