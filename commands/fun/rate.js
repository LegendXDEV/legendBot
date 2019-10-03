const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const emote = require("../../emojis.json")
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;


module.exports.run = async (bot, message, args, prefix) => {

let ratus = message.mentions.members.first();
if(!ratus) return message.channel.send("Tag someone to rate them!");

let rates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

let result = Math.floor((Math.random() * rates.length));
if (ratus.user.id === bot.user.id) {
  result = '10'
}
let embed1 = new Discord.RichEmbed()
.setTitle('User rating machine')
.setColor("RANDOM")
.setDescription(`__**${message.author.username}**__ rating is ${result}/10⭐`)
let embed2 = new Discord.RichEmbed()
.setTitle('User rating machine')
.setColor("RANDOM")
.setDescription(`__**${ratus.user.username}**__ rating is ${result}/10⭐`)
if(ratus.user.id === message.author.id) {
  return message.channel.send(embed1);
} else return message.channel.send(embed2);


}

module.exports.config = {
    name: "rate",
    noalias: "No Aliases",
    aliases: [],
    usage: `rate <user>`,
    category: `fun`,
    description: "rate a user!",
    accessableby: "everyone",
    example: "rate <@513571036688547871>"
}
