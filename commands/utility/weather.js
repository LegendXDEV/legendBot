const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const emote = require("../../emojis.json")
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;

const weather = require('weather-js');

module.exports.run = async (bot, message, args, prefix) => {
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
              if (err) message.channel.send(emote.cross + err);

              if (result.length === 0) {
                  message.channel.send(emote.cross + '**Please enter a valid location.** `' + prefix + 'help weather` for more information')
                  return;
              }

              var current = result[0].current;
              var location = result[0].location;

              const embed = new Discord.RichEmbed()
                  .setDescription(`**${current.skytext}**`)
                  .setAuthor(`Weather for ${current.observationpoint}`)
                  .setThumbnail(current.imageUrl)
                  .setColor(0x00AE86)
                  .addField('Timezone',`UTC${location.timezone}`, true)
                  .addField('Degree Type',location.degreetype, true)
                  .addField('Temperature',`${current.temperature} Degrees`, true)
                  .addField('Feels Like', `${current.feelslike} Degrees`, true)
                  .addField('Winds',current.winddisplay, true)
                  .addField('Humidity', `${current.humidity}%`, true)
                  .addField("Day", `${current.day}`, true)
                  .addField("Date", `${current.date}`, true)

                  message.channel.send({embed});
          });
}


module.exports.config = {
  name: "weather",
  noalias: "No Aliases",
  aliases: [],
  usage: `weather <city> [country]`,
  category: `Utilty`,
  description: "whats the weather in a certain place?",
  accessableby: "everyone",
  example: "weather melbourne australia"
}
