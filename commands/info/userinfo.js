const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const emote = require("../../emojis.json")
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;


module.exports.run = async (bot, message, args, prefix) => {
     let resence = true
     const status = {
         online: `${emote.online} Online`,
         idle: `${emote.idle} Idle`,
         dnd: `${emote.dnd} Do Not Disturb`,
         offline: `${emote.offline} Offline/Invisible`
       }
 const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member || message.guild.members.find(args[0])

const sortedMembers = message.guild.members.array().sort((a, b) => a.joinedTimestamp - b.joinedTimestamp);
const memberPos = sortedMembers.findIndex(e => e.id === member.id) + 1;
 if (member.user.bot === true) {
     bot = ":robot: Yes";
   } else {
     bot = `${emote.user} No`;
   }
         let embed = new Discord.RichEmbed()
             .setAuthor(member.user.tag, member.user.displayAvatarURL)
             .setThumbnail(member.user.displayAvatarURL)
             .setColor("#00ff00")
             .setDescription(`<@${member.user.id}>`)
             .addField(":calendar_spiral:  Joined Discord At", member.user.createdAt.toUTCString().substr(0, 16), true)
             .addField(":inbox_tray: Joined Server At", member.joinedAt.toUTCString().substr(0, 16), true)
             .addField("Join Postion", memberPos, true)
             .addField("Nickname", `${member.nickname !== null ? `${emote.tick} Nickname: ${member.nickname}` : `${emote.cross} None`}`, true)
             .addField("Bot", `${bot}`, true)
             .addField("Status", `${status[member.user.presence.status]}`, true)
             .addField("Playing", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : `${emote.cross} Not playing`}`, true)
             .addField(`:scales: Roles (${member.roles.size})`, member.roles.map(roles => `${roles.name}`).join(" **|** "))
             .setFooter(`ID: ${member.user.id}`)
             .setTimestamp()

             message.channel.send(embed);

     }

module.exports.config = {
    name: "userinfo",
    // noalias: "No Aliases",
    aliases: ['whois'],
    usage: `userinfo [user]`,
    category: `information`,
    description: "shows information about a user!",
    accessableby: "everyone",
    example: "userinfo <@513571036688547871>"
}
