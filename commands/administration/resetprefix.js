
const Discord = require("discord.js");
const fs = require("fs");
const botconfig =  require("../../botconfig.json");
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;
const emote = require("../../emojis.json")

module.exports.run = async (bot, message, args, prefix) => {

if(!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send(`${emote.tick} You do not have access to use this command!`);

let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))
prefixes[message.guild.id] = {
  prefixes: `${defaultprefix}`
};

fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
  if (err) {
  console.log(err)
  }
});

message.channel.send(`${emote.tick} Successfully change the bots prefix to default: ` + "`" + `${defaultprefix}` + "`")


};
module.exports.config = {
name: "resetprefix",
// noalias: "No Aliases",
aliases: ["setprefixdefault", "prefixreset", "prefixdefault"],
usage: `resetprefix`,
category: `Administration`,
description: "change the bots prefix back to the default",
accessableby: "Administrator",
example: "resetprefix"
}
