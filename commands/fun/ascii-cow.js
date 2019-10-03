const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const emote = require("../../emojis.json")
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;

const cows = require('cows');
const rn = require('random-number');

module.exports.run = async (bot, message, args, prefix) => {

  const options = {
         min: 0,
         max: cows().length - 1,
         integer: true
     };
     const random = rn(options);
     message.channel.send(cows()[random], { code: ''});

}

module.exports.config = {
    name: "ascii-cow",
    // noalias: "No Aliases",
    aliases: ['cow'],
    usage: `ascii-cow`,
    category: `fun`,
    description: "gives ascii on a cow.",
    accessableby: "everyone",
    example: " ascii-cow"
}
