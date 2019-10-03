const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix
const work = botconfig.work;
const fetch = require('node-fetch');


module.exports.run = async (bot, message, args) => {

  let msg = await message.channel.send("Generating...")

       fetch("https://apis.duncte123.me/meme")
       .then(res => res.json()).then(body => {
           if(!body || !body.data.image) return message.reply(" whoops. I broke, try again!")

           let embed = new Discord.RichEmbed()
           .setColor('#add8e6')
           .setAuthor(`${bot.user.username} meme!`, message.guild.iconURL)
           .setImage(body.data.image)
           .setTimestamp()
           .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)

           if(body.data.title) {
               embed.setTitle(body.data.title).setURL(body.data.url)
           }
               msg.edit(embed)
       })
}

module.exports.config = {
  name: "meme",
  // noalias: "No Aliases",
  aliases: ["memes"],
  usage: `gusta`,
  category: `images`,
  description: "sends a image of a meme!",
  accessableby: "everyone",
  example: "meme"
}
