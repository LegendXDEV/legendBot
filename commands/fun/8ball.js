const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const emote = require("../../emojis.json")
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;

module.exports.run = async (bot, message, args, prefix) => {

  if(!args[1]) return message.reply("Plesae enter a full question with 2 or more words!");
    let replies = ["Yes", "No", "I don't know", "Ask again later!", "Not a chance!", "I am not sure!", "Please No", "You tell me", "Without a doubt", "Cannot predict now", "Without a doubt", "You wish", "Absolutely", "Absolutely not", "Keep dreaming." ];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.join(" ");

    let ballembed = new Discord.RichEmbed()

    .setAuthor(`${message.author.username}`)
    .setColor("#00ff00")
    .addField(":8ball:Question", question)
    .addField("Answer", replies[result]);

    message.channel.send(ballembed)


}

module.exports.config = {
    name: "8ball",
    noalias: "No Aliases",
    aliases: [],
    usage: `8ball <question>`,
    category: `fun`,
    description: "ask a question and the bot will answer!",
    accessableby: "everyone",
    example: "8ball am i the best gamer?"
}
