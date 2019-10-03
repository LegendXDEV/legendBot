const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const emote = require("../../emojis.json")
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;
let giveMeAJoke = require('give-me-a-joke');;


module.exports.run = async (bot, message, args, prefix) => {

  giveMeAJoke.getRandomDadJoke(function(joke){
         message.channel.send(joke)
     })

}

module.exports.config = {
    name: "joke",
    noalias: "No Aliases",
    aliases: [],
    usage: `joke`,
    category: `fun`,
    description: "gives a random joke!",
    accessableby: "everyone",
    example: "joke"
}
