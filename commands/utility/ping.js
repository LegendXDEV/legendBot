const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const emote = require("../../emojis.json")
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;


module.exports.run = async (bot, message, args, prefix) => {

  let ping = message.createdTimestamp - message.createdTimestamp
	let choices = [":ping_pong: Ping Pong", "I don't wanna see my ping", "Is my ping bad?", "How fast is my security?"]
	let response = choices[Math.floor(Math.random() * choices.length)]

		 message.channel.send("Pinging ...")  // Placeholder for pinging ...
		 .then((msg) => { // Resolve promise
				msg.edit("Pong!")
				.then((msg) => {
					msg.edit(`${response}: Bot Latency: ` + "`" + `${ping}` + "`" + ` API Latency: ` + "`" + `${Math.round(bot.ping)}` + "`")
				}) // Edits message with current timestamp minus timestamp of message
			});
}
  module.exports.config = {
    name: "ping",
    noalias: "No Aliases",
    aliases: [],
    usage: `ping`,
    category: `Utility`,
    description: "Get the bots api and latency status!",
    accessableby: "everyone",
    example: "ping"
    }
