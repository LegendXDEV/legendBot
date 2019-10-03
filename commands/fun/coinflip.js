const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const prefix = botconfig.prefix
const work = botconfig.work;


module.exports.run = async (bot, message, args) => {

    let chance = Math.floor(Math.random() * 2);
    message.channel.send('flippin coin...').then((mi) => {
    setTimeout(function() {
      if(chance == 0)
      {
        mi.edit("Your Coin landed on **Heads**!", {files: [__dirname + "/coinpics/heads.png"]});
      }
      else
      {
        mi.edit("Your Coin landed on **Tails**!", {files: [__dirname + "/coinpics/tails.png"]});
      }
    }, 1200)});


}

module.exports.config = {
  name: "coin-flip",
  // noalias: "No Aliases",
  aliases: ["coinflip", "coinf", "fcoin", "flipcoin"],
  usage: `coin-flip`,
  category: `fun`,
  description: "flip a coin and see wether its heads or tails.",
  accessableby: "everyone",
  example: "coin-flip"
}
