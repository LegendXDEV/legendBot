const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix
const work = botconfig.work;
const fetch = require('node-fetch');


module.exports.run = async (bot, message, args) => {

  let msg = await message.channel.send("Generating...")

       fetch("http://aws.random.cat/meow")
       .then(res => res.json()).then(body => {
           if(!body) return message.reply(" whoops. I broke, try again!")

           let embed = new Discord.RichEmbed()
           .setColor("#00ff00")
           .setAuthor(`${bot.user.username} Cats!`, message.guild.iconURL)
           .setImage(body.file)
           .setTimestamp()
           .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)

               msg.edit(embed)
       })
}

module.exports.config = {
  name: "cat",
  // noalias: "No Aliases",
  aliases: ["kitten"],
  usage: `cat`,
  category: `images`,
  description: "sends a image of a cat!",
  accessableby: "everyone",
  example: "cat"
}
