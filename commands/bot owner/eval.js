const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const emote = require("../../emojis.json")
const { inspect } = require("util")
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;


module.exports.run = async (bot, message, args, prefix) => {

  if(message.author.id == botownerID) {
    let toEval = args.join(" ")
    let evaluated = inspect(eval(toEval, { depth: 0 }));
  try {
             if (!toEval) {
                 return message.channel.send(`Error while evaluating: \`air\``);
             } else {
                 let hrStart = process.hrtime()
                 let hrDiff;
                 hrDiff = process.hrtime(hrStart);
                 return message.channel.send(`*Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms.*\n\`\`\`javascript\n${evaluated}\n\`\`\``, { maxLength: 1900 })
             }

         } catch (e) {
             return message.channel.send(`Error while evaluating: \`${e.message}\``);
         }

       } else {
         return message.reply(" you are not the bot owner!").then(msg => msg.delete(5000))
     }
   }

module.exports.config = {
    name: "eval",
    noalias: "No Aliases",
    aliases: [],
    usage: `eval <input>`,
    category: `Owners`,
    description: "Evaluates code!",
    accessableby: "Bot Owner",
    example: "eval message.channel.send('hello')"
}
