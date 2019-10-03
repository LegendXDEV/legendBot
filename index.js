const Discord = require("discord.js");
const botconfig = require("./botconfig.json");

const bot = new Discord.Client({disableEveryone: true});
// npm packages:
// --------------------
//  npm i discord.js
// npm i weather-js
// npm i urban
// npm i node-fetch
// npm i request
// npm i yo-mamma
// npm i give-me-a-joke
// npm i mathjs
// npm i cows
// npm i random-number
// npm i util
// npm i discord.js-reaction-menu
// npm i cowsay

require("./util/eventHandler")(bot)
// start of commmand handler
const fs = require("fs");

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

let foldernames = ["administration", "bot owner", "info", "server partner", "utility", "fun", "images"]; // feel free to add all the folders u have into this array

function loadCommands(folder) {
    fs.readdir(`./commands/${folder}`, (err, files) => {
        if (err) console.error(err);
        let jsfiles = files.filter(f => f.split(".").pop() === "js");

        if (jsfiles.length <= 0) return console.log("There are no commands to load...");

        console.log(`Loading ${jsfiles.length} commands...`);
        jsfiles.forEach((f, i) => {
            let props = require(`./commands/${folder}/${f}`);
            console.log(`${i + 1}: ${f} loaded!`);
            bot.commands.set(props.config.name, props);
            props.config.aliases.forEach(alias => {
                bot.aliases.set(alias, props.config.name);
            });
        });
    });
}
foldernames.forEach(folder => {
     loadCommands(folder);

});

bot.on('message', message => {
  if (message.channel.id === "622680996264935484") {
    message.react('👍')
      .then(() => {
        message.react('😎')
        message.react('👌')
        message.react('💯')
      });
  }
  if (message.channel.id === "624601558176497694") {
    message.react('✅')
      .then(() => {
        message.react('❌')
      });
  }
});

// message event
bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json",  "utf8"));

        if(!prefixes[message.guild.id]){
          prefixes[message.guild.id] = {
            prefixes: botconfig.prefix
          };
        }

     // start bot info key statments
    let prefix = prefixes[message.guild.id].prefixes;    if(!message.content.startsWith(prefix)) return;
    let sender = message.author;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);

    if(message.content == "<@604603381041856512>") {
      message.reply(`My prefix is ` + "`" + `${prefix}` + "`" + `\nfor help type ` + "`" + `${prefix}help` + "`")
    }

    if(cmd.startsWith(prefix)) {
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
    if(commandfile) commandfile.run(bot,message,args,prefix)
}
});

  //bot token
bot.login(botconfig.token)
