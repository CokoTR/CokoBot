const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
module.exports = {
  name: "davet",
  description: "Kimsesiz ", 
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription(
    `
\[Botu sunucunuza eklemek için buraya tıklayın.](https://discord.com/oauth2/authorize?client_id=1071940803678720051&scope=bot&permissions=8589934591)\n
`)
                       .setColor("ffc300")
                      )    
}
} 