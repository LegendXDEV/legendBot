const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const emote = require("../../emojis.json")
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;


module.exports.run = async (bot, message, args, prefix) => {

  if(message.author.id != botownerID) return;

  if(!args[0]) return message.channel.send(`${emote.cross} Invalid Arguments **${prefix}help reload** for more information!`)

     let commandName = args[0].toLowerCase()

     try {
         delete require.cache[require.resolve(`./${commandName}.js`)] // usage !reload <name>
         bot.commands.delete(commandName)
         const pull = require(`./${commandName}.js`)
         bot.commands.set(commandName, pull)
     } catch(e) {
         return message.channel.send(`Could not reload: \`${args[0].toUpperCase()}\``, e.message)
     }

     message.channel.send(`${emote.tick} Successfully reloaded the command \`${args[0].toUpperCase()}\`!`)
     console.log(`Reloaded \`${args[0].toUpperCase()}\`!`)

     }

module.exports.config = {
    name: "reload-admin",
    noalias: "No Aliases",
    aliases: [],
    usage: `reload-admin <command>`,
    category: `Owners`,
    description: "reloads a bot command!",
    accessableby: "Bot Owner",
    example: "reload-admin resetprefix"
}
