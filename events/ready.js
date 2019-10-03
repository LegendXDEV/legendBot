const Discord =  require("discord.js")
const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix

module.exports =  bot => {
      console.log(`${bot.user.username} is ready to serve the fellow legends!`)

      let statuses = [
        `Legend X on Youtube!`
      ]

      setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(`Legend X on Youtube!`, {type: "WATCHING"});
      }, 5000)
}
