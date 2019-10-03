const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json")
const rm = require('discord.js-reaction-menu');
const emote = require("../../emojis.json")
const defaultprefix = botconfig.prefix;
const botownerID = botconfig.botOwnerID;
const serverID = botconfig.serverID;
const serverownerID = botconfig.serverOwnerID;


module.exports.run = async (bot, message, args, prefix) => {
let max;
if(message.author.id != serverownerID) {
  max = '6'
}
if(message.author.id == serverownerID) {
  max = '8'
}
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// home page
  let home = new Discord.RichEmbed()
  .setAuthor("Legend Bot - Help", bot.user.displayAvatarURL)
  .setDescription(`Hello ${message.author.username} my name is ${bot.user.username}, this is the home page of the help menu!
    \nMy prefix is **${prefix}**\n\nTo find more information on a command use **${prefix}help <command>**
    Not touching the reactions for 1 minute will remove the reactions!
    Only the user who triggers this command may navigate through the pages!
    \n **|** = or\n**<>** = required\n**[]** = optional
    \n\nTo navigate through the pages react to the emojis below!
    ⏪ = go back to this page right here!
    ◀ = go to the previous page
    ▶ = go to the next page
    ⏩ = skip all the pages and go to the last page
    🛑 = cancel the help command and this will remove all reactions!
`)
  .setFooter(`Page 1 of ${max} • Requested by ${message.author.username}`, message.author.displayAvatarURL)
  .setTimestamp()
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // page 2
  let page2 = new Discord.RichEmbed()
  .setAuthor("Legend Bot - Help Information", bot.user.displayAvatarURL)
  .setDescription(`Information Commands:\n
    **Help**
      brings up this document!
        --> help [command] gives more information on a command

    **serverinfo**
      shows information about this server!

    **userinfo**
      shows information about a certain user (if there is no mention then it will be your information)

    **roleinfo**
      shows information about a role (make sure its the exact spelling or else it wont work)

    **membercount**
      displays the servers membercount status!

`)
  .setFooter(`Page 2 of ${max} • ${prefix}help [command] for more information`)
  .setTimestamp()

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// page 3
  let page3 = new Discord.RichEmbed()
  .setAuthor("Legend Bot - Help Information", bot.user.displayAvatarURL)
  .setDescription(`Utility Commands:\n
    **uptime**
      shows how long the bot has be online for.

    **ping**
      shows how fast the bots response is.

    **weather**
      shows the weather in a certain city.

    **urban**
      searches in the urban dictionary.

    **id**
      gets the id of a user.

   **avatar**
      gets the avatar of a user.

`)
  .setFooter(`Page 3 of ${max} • ${prefix}help [command] for more information`)
  .setTimestamp()
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // page 4
    let page4 = new Discord.RichEmbed()
    .setAuthor("Legend Bot - Help Information", bot.user.displayAvatarURL)
    .setDescription(`Server Partner Commands:\n
      **partnerinfo**
        sends the message of how to be partnered with Legends

      **rules**
        sends a message of the rules for this server!

      **titans**
        sends a message of a partner -- TITANS SERVER!

  `)
    .setFooter(`Page 4 of ${max} • ${prefix}help [command] for more information`)
    .setTimestamp()
    .setTimestamp()
    // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // page 5
      let page5 = new Discord.RichEmbed()
      .setAuthor("Legend Bot - Help Information", bot.user.displayAvatarURL)
      .setDescription(`Bot Owner Commands:\n
        **eval**
          evalutes code to see if it works to make testing easier!

        **restart**
          shutsdown the bot and logs back in.

        **setstatus**
          set the status of the bot online|idle|dnd|invisible

        **reload**
          shows the information about reloading Commands

    `)
      .setFooter(`Page 5 of ${max} • ${prefix}help [command] for more information`)
      .setTimestamp()
      // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      // page 6
        let page6 = new Discord.RichEmbed()
        .setAuthor("Legend Bot - Help Information", bot.user.displayAvatarURL)
        .setDescription(`Administration Commands:\n
          **prefix**
            set the bots prefix to what ever you like.

          **resetprefix**
            resets the prefix back to default
      `)
        .setFooter(`Page 6 of ${max} • ${prefix}help [command] for more information`)
        .setTimestamp()
        // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        // page 7
          let page7 = new Discord.RichEmbed()
          .setAuthor("Legend Bot - Help Information", bot.user.displayAvatarURL)
          .setDescription(`Fun Commands:\n
            **yomama**
              a fun yomama jokes (some may be insulting please don't take it personally)

            **reverse**
              reverse a word, sentence or phrase (hey = yeh)

            **rate**
              rate a user and the bot will give them a rating!

            **joke**
              gives a random joke!

            **flip**
              flips a word, sentence or phrase (hey = ʎǝɥ)

            **ascii-cow**
              gives an image of a cow in ascii text

            **clap**
              breaks down every word with a clap in between (i am the best bot = I:clap:aM:clap:ThE:clap:BEst:clap:bOt)

            **8ball**
              have the bot answer a question for you.

            **coinflip**
              flip a coin.

            **cowsay**
              say something and the cow will respond back.

            **rps**
              a fun game of rock, paper, scissors.

            **catfact**
              facts about Cats

            **dogfact**
              facts about dogs

            **calc**
              use the calculator.
        `)
          .setFooter(`Page 7 of ${max} • ${prefix}help [command] for more information`)
          .setTimestamp()
          // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          // page 8
            let page8 = new Discord.RichEmbed()
            .setAuthor("Legend Bot - Help Information", bot.user.displayAvatarURL)
            .setDescription(`Image Commands:\n
              **gusta**
                see gusta meme face

              **pepe**
                random pepe images

              **alpaca**
                sends a image of a Alpaca

              **cat**
                sends a image of a Cat

              **dog**
                sends a image of a Dog

              **seal**
                sends a image of a seal

              **llama**
                sends a image of a llama

              **meme**
                sends a meme

              **bird**
                sends a image of a bird
          `)
            .setFooter(`Page 8 of ${max} • ${prefix}help [command] for more information`)
            .setTimestamp()
  // ------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  if(args[0] == "help") return message.channel.send(`Just do ${prefix}help instead.`)

   if(args[0]) {
       let command = args[0];
       if(bot.commands.has(command)) {
           command = bot.commands.get(command);
           var SHembed = new Discord.RichEmbed()
           .setColor('#5780cd')
           .setTitle(`Command: ${prefix}${command.config.name}`)
           .setDescription(`**Aliases:** ${command.config.noalias || command.config.aliases}\n**Usage:** ${prefix}${command.config.usage || "No Usage"}\n**Category:** ${command.config.category || "No Category"} \n**Description:** ${command.config.description || "No Description"}\n**Accessable by:** ${command.config.accessableby || "everyone"}\n**Example:** ${prefix}${command.config.example || command.config.name}`)

         message.channel.send(SHembed);
       }
     }
     if (message.author.id != serverownerID) {
     if(!args[0]) {
     new rm.menu(message.channel, message.author.id, [home, page2, page3, page6, page7, page8], 60000)
     }
     }

     if (message.author.id == serverownerID) {
     if(!args[0]) {
     new rm.menu(message.channel, message.author.id, [home, page2, page3, page4, page5, page6, page7, page8], 60000)
   }
   }


}
module.exports.config = {
    name: "help",
    // noalias: "No Aliases",
    aliases: ["h", "halp", "commands"],
    usage: `help`,
    category: `information`,
    description: "Shows the list of commands for this bot",
    accessableby: "everyone",
    example: "help"
  }
