const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
module.exports = {
  name: "yardım",
  description: "kimsesiz", 
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription(
    `
\<a:909843425904447520:909843425904447520> ${ayarlar.PREFIX}oynat <şarkı-adı>\ : **Bir Şarkıyı Oynatır.** \n
\<a:909843425904447520:909843425904447520> ${ayarlar.PREFIX}atla\ : **Sıradaki şarkıyı atlar.**\n
\<a:909843425904447520:909843425904447520> ${ayarlar.PREFIX}döngü\ : **Çalan şarkıyı sürekli tekrarlar.**\n
\<a:909843425904447520:909843425904447520> ${ayarlar.PREFIX}durdur\ : **Şarkıyı durdurur.**\n
\<a:909843425904447520:909843425904447520> ${ayarlar.PREFIX}devam\ : **Duran şarkıyı devam ettirir.**\n
\<a:909843425904447520:909843425904447520> ${ayarlar.PREFIX}sıra\ : **Şarkı sırasını gösterir.**\n
\<a:909843425904447520:909843425904447520> ${ayarlar.PREFIX}şarkı\ : **Oynatılan şarkının adını söyler.**\n
\<a:909843425904447520:909843425904447520> ${ayarlar.PREFIX}davet\ : **Botun davet linkini atar.**\n
`)
                       .setColor("000000")
                      )    
}
} 