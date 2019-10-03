const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix
const work = botconfig.work;
const fetch = require('node-fetch');


module.exports.run = async (bot, message, args) => {

  let msg = await message.channel.send("Generating...")

      fetch("https://apis.duncte123.me/alpaca")
      .then(res => res.json()).then(body => {
          if(!body) return message.reply(" whoops. I broke, try again!")

          let embed = new Discord.RichEmbed()
          .setColor("#00ff00")
          .setAuthor(`${bot.user.username} Alpaca!`, message.guild.iconURL)
          .setImage(body.data.file)
          .setTimestamp()
          .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)

              msg.edit(embed)
      })
}

module.exports.config = {
  name: "alpaca",
  noalias: "No Aliases",
  aliases: [],
  usage: `alpaca`,
  category: `images`,
  description: "sends a image of a alpaca!",
  accessableby: "everyone",
  example: "alpaca"
}
