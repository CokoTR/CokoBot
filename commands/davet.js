const Discord = require('discord.js');

exports.run = (client, message) => {
  
  const davet = new Discord.MessageEmbed()
  .setColor('RED')
  .setThumbnail('https://media.discordapp.net/attachments/720029424216440923/735255651638313061/727894683061321759.gif')
  .setDescription(`[Buraya](https://discord.com/oauth2/authorize?client_id=${client.ekayarlar.ID}&scope=bot&permissions=8589934591) tıklayarak botu sunucuna ekleyebilirsin. \n [Buraya](${client.ekayarlar.sunucu}) tıklayarak destek sunucusuna katılabilirsin.
`)
  message.channel.send(davet)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "davet"
}