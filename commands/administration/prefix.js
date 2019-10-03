
const Discord = require("discord.js");
const fs = require("fs");
const botconfig =  require("../../botconfig.json");
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;
const emote = require("../../emojis.json")

module.exports.run = async (bot, message, args, prefix) => {

  if(!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send(`${emote.cross} You do not have access to use this command!`);
  if(!args[0] || args[0 == "help"]) return message.channel.send(`how do you use this command? example: ` + "`" + `${prefix}setprefix <new_prefix>` + "`")

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))
  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) {
    console.log(err)
    }
  });

  message.channel.send(`${emote.tick} Successfully change the bots prefix to ` + "`" + `${args[0]}` + "`")

};
module.exports.config = {
  name: "prefix",
  // noalias: "No Aliases",
  aliases: ["setprefix"],
  usage: `prefix <prefix>`,
  category: `Administration`,
  description: "change the bots prefix to what ever you like",
  accessableby: "Administrator",
  example: "prefix !"
}
