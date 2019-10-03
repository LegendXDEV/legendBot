const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix
const work = botconfig.work;
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => {

  let msg = await message.channel.send("Generating...")

        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json()).then(body => {
            if(!body) return message.reply(" whoops. I broke, try again!")

            let embed = new Discord.RichEmbed()
            .setColor('#add8e6')
            .setAuthor(`${bot.user.username} Dogs!`, message.guild.iconURL)
            .setImage(body.message)
            .setTimestamp()
            .setFooter(bot.user.username.toUpperCase(), bot.user.displayAvatarURL)

            msg.edit(embed)
        })


    }


module.exports.config = {
  name: "dog",
  // noalias: "No Aliases",
  aliases: ["puppy", "doggie", "dogs"],
  usage: `dog`,
  category: `images`,
  description: "send a image of a dog!",
  accessableby: "everyone",
  example: "dog"
}
