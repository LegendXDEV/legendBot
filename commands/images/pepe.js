const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const emote = require("../../emojis.json")
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;

module.exports.run = async (bot, message, args, prefix) => {
  let pepe1 = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage("https://cdn.discordapp.com/emojis/428556352915505165.png?v=1");

    let pepe2 = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage("https://cdn.discordapp.com/emojis/428556326482739230.png?v=1");

    let pepe3 = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage("https://cdn.discordapp.com/emojis/428556486235389973.png?v=1");

    let pepe4 = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage("https://cdn.discordapp.com/emojis/428556308929576960.png?v=1");

    let pepe5 = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage("https://cdn.discordapp.com/emojis/428556295218659329.png?v=1");

    let pepe6 = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage("https://cdn.discordapp.com/emojis/428556467021545473.png?v=1");

    let pepe7 = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage("https://cdn.discordapp.com/emojis/428556448507625474.png?v=1");

    let pepe8 = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage("https://cdn.discordapp.com/emojis/428556377754042378.png?v=1");

    let pepe9 = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage("https://cdn.discordapp.com/emojis/428556281767526405.png?v=1");

    let pepe10 = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage("https://cdn.discordapp.com/emojis/428556266366042112.png?v=1");
    let pepe11 = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage("https://cdn.shopify.com/s/files/1/0160/2840/1712/products/pepe-png.png?v=1569545677");

    let pepe12 = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage("https://thumbs.gfycat.com/ThornyVapidAztecant-small.gif");

    let pepe13 = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage("https://www.trzcacak.rs/myfile/full/531-5313875_421-kb-png-he-doesnt-know-pepe.png");

    let pepe14 = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage("https://purepng.com/public/uploads/large/31506352573yc1mjzhdnizeeasbsjqeuitna1q6li8urnjdp9dj4che00m7br1aniuctbot1hd18g9si4vngtg8ul1xpqq6caedcmmy52c4fvjl.png");

    let pepe15 = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage("https://t1.rbxcdn.com/789f3c10e9df9fece3f4a007951456f6");

    let pepe16 = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage("https://i.kym-cdn.com/photos/images/original/001/459/556/023.png");

    let pepes = [pepe1, pepe2, pepe3, pepe4, pepe5, pepe6, pepe7, pepe8, pepe9, pepe10, pepe11, pepe12, pepe13, pepe14, pepe15, pepe16]

    let dapepe = Math.floor((Math.random() * pepes.length));

    message.channel.send(pepes[dapepe])

}


module.exports.config = {
  name: "pepe",
  noalias: "No Aliases",
  aliases: [],
  usage: `pepe`,
  category: `images`,
  description: "random images of pepe!",
  accessableby: "everyone",
  example: "pepe"
}
