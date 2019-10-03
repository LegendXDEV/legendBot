const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const emote = require("../../emojis.json")
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;

module.exports.run = async (bot, message, args, prefix) => {
  // function checkDays(date) {
  //         let now = new Date();
  //         let diff = now.getTime() - date.getTime();
  //         let days = Math.floor(diff / 86400000);
  //         return days + (days == 1 ? " day" : " days") + " ago";
      // };
      let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
      let region = {
          "brazil": ":flag_br: Brazil",
          "eu-central": ":flag_eu: Central Europe",
          "singapore": ":flag_sg: Singapore",
          "us-central": ":flag_us: U.S. Central",
          "sydney": ":flag_au: Sydney",
          "us-east": ":flag_us: U.S. East",
          "us-south": ":flag_us: U.S. South",
          "us-west": ":flag_us: U.S. West",
          "eu-west": ":flag_eu: Western Europe",
          "vip-us-east": ":flag_us: VIP U.S. East",
          "london": ":flag_gb: London",
          "amsterdam": ":flag_nl: Amsterdam",
          "hongkong": ":flag_hk: Hong Kong",
          "russia": ":flag_ru: Russia",
          "southafrica": ":flag_za:  South Africa"
      };
  const statues = ["online", "dnd", "idle"];
  const embed = new Discord.RichEmbed()
          .setColor("#00ff00")
          .setThumbnail(message.guild.iconURL)
          .setAuthor(`Information about ${message.guild.name}`, message.guild.iconURL)
          .addField("Name", `${message.guild.name}`, true)
          .addField("ID", `:id: ${message.guild.id}`, true)
          .addField("Owner", `:crown: <@${message.guild.owner.user.id}>`, true)
          .addField("Region", region[message.guild.region], true)
          .addField("Total | Humans | Bots", `:beginner:${message.guild.members.size} | ${emote.user}${message.guild.members.filter(member => !member.user.bot).size} | :robot: ${message.guild.members.filter(member => member.user.bot).size}`, true)
          .addField("Members Online", `${emote.online} ${message.guild.members.filter(m => statues.includes(m.user.presence.status)).size}`, true)
          .addField("Verification Level", `${emote.weewoo}${verifLevels[message.guild.verificationLevel]}`, true)
          .addField(`Channels (${message.guild.channels.filter(c => c.type != "category").size})`, `:notepad_spiral:  **${message.guild.channels.filter(c => c.type == "text").size}** | :speaker: **${message.guild.channels.filter(c => c.type == "voice").size}** `, true)
          .addField("Roles", `:trident: ${message.guild.roles.size}`, true)
          .addField("Creation Date", `:calendar_spiral:${message.channel.guild.createdAt.toUTCString().substr(0, 16)} `, true)
          .setTimestamp()
          message.channel.send(embed);
};
module.exports.config = {
  name: "serverinfo",
  noalias: "No Aliases",
  aliases: [],
  usage: `serverinfo`,
  category: `information`,
  description: "information/stats on the server!",
  accessableby: "everyone",
  example: "serverinfo"
}
