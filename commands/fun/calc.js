const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const emote = require("../../emojis.json")
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;

const math = require('mathjs')

module.exports.run = async (bot, message, args, prefix) => {

  if(!args[0]) return message.channel.send(emote.cross + 'Supply a calculation. `help calc` for more information.');

  let resp;
  try {
    resp = math.evaluate(args.join(' '));
  } catch (e) {
    return message.channel.send(emote.cross + 'Supply a valid calculation. `help calc` for more information.')
  }

  const embed = new Discord.RichEmbed()
    .setColor(0xffffff)
    .setTitle('Math Calculation')
    .addField('Question', `\`\`\`js\n${args.join(' ')}\`\`\``)
    .addField('Answer', `\`\`\`js\n${resp}\`\`\``)

    message.channel.send(embed)
}

module.exports.config = {
    name: "calc",
    // noalias: "No Aliases",
    aliases: ['cow'],
    usage: `calc <input>`,
    category: `fun`,
    description: "does a calculation for you, note: x doesnt work it needs to be *",
    accessableby: "everyone",
    example: "calc 5cm + 20 inches"
}
