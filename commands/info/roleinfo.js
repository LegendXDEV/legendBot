const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const emote = require("../../emojis.json")
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;

module.exports.run = async (bot, message, args, prefix) => {
      let inline = true

      let role = args.join(` `)
      if(!role) return message.reply("Specify a role!");
      let gRole = message.guild.roles.find(`name`, role);
      if(!gRole) return message.reply("Couldn't find that role. (make sure it is its **EXACT** spelling.)");

      const status = {
          false: "No",
          true: "Yes"
        }

      let roleemebed = new Discord.RichEmbed()
      .setColor(gRole.hexColor)
      .addField("ID", gRole.id, inline )
      .addField("Name", gRole.name, inline)
      .addField("Mention", `\`<@${gRole.id}>\``, inline)
      .addField("Hex", gRole.hexColor, inline)
      .addField("Members", gRole.members.size, inline)
      .addField("Position", gRole.position, inline)
      .addField("Display Seperatly", status[gRole.hoist], inline)
      .addField("Mentionable", status[gRole.mentionable], inline)
      .addField("Managed", status[gRole.managed], inline)
      .setFooter(`Role creation date • ${gRole.createdAt.toUTCString().substr(0, 16)}`)

      message.channel.send(roleemebed);
};
module.exports.config = {
  name: "roleinfo",
  // noalias: "No Aliases",
  aliases: ['inforole'],
  usage: `roleinfo`,
  category: `information`,
  description: "information/stats on a role!",
  accessableby: "everyone",
  example: "roleinfo"
}
