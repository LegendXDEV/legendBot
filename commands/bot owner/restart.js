const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const emote = require("../../emojis.json")
const token = botconfig.token;
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;


module.exports.run = async (bot, message, args, prefix) => {

  if(message.author.id == botownerID) {

  try {
        bot.user.setStatus('invisible')
        await message.channel.send("Resetting...")
        .then(msg => bot.destroy())
        .then(() => bot.login(token))
        bot.user.setStatus('online')
        message.channel.send("OH BABY I'M BACK!")


         } catch (e) {
             return message.channel.send(`Error while shutdown: \`${e.message}\``);
         }

       } else {
         return message.reply("you are not the bot owner!").then(msg => msg.delete(5000))
     }
   }

module.exports.config = {
    name: "restart",
    noalias: "No Aliases",
    aliases: [],
    usage: `restart`,
    category: `Owners`,
    description: "restarts the bot!",
    accessableby: "Bot Owner",
    example: "restart"
}
