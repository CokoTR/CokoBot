const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
module.exports = {
  name: "yardım",
  description: "kimsesiz", 
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription(
    `
\<a:909843425904447520:909843425904447520> **${ayarlar.PREFIX}oynat <şarkı-adı>\ : **Bir Şarkıyı Oynatır. 
\<a:909843425904447520:909843425904447520> **${ayarlar.PREFIX}atla\ : **Sıradaki şarkıyı atlar.
\<a:909843425904447520:909843425904447520> **${ayarlar.PREFIX}döngü\ : **Çalan şarkıyı sürekli tekrarlar.
\<a:909843425904447520:909843425904447520> **${ayarlar.PREFIX}durdur\ : **Şarkıyı durdurur.
\<a:909843425904447520:909843425904447520> **${ayarlar.PREFIX}devam\ : **Duran şarkıyı devam ettirir.
\<a:909843425904447520:909843425904447520> **${ayarlar.PREFIX}sıra\ : **Şarkı sırasını gösterir.
\<a:909843425904447520:909843425904447520> **${ayarlar.PREFIX}şarkı\ : **Oynatılan şarkının adını söyler.
\<a:909843425904447520:909843425904447520> **${ayarlar.PREFIX}davet\ : **Botun davet linkini atar.
`)
                       .setColor("000000")
                      )    
}
} 