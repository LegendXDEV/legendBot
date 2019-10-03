const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const emote = require("../../emojis.json")
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;

const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');


module.exports.run = async (bot, message, args, prefix) => {

  if (args.length < 1) return message.channel.send("Please provide some text to clapify")

    message.channel.send(args.map(randomizeCase).join(':clap:'));


}

module.exports.config = {
    name: "clap",
    noalias: "No Aliases",
    aliases: [],
    usage: `clap <text>`,
    category: `fun`,
    description: "breaks down every word with a clap!",
    accessableby: "everyone",
    example: "clap sup bro"
}
