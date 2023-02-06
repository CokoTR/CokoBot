const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
module.exports = {
  name: "yardım",
  description: "kimsesiz", 
  execute(client, message) {
  message.channel.send(new Discord.MessageEmbed()
                      .setDescription(
    `
\ **${ayarlar.PREFIX}oynat <şarkı-adı>\ : **Bir Şarkıyı Oynatır. 
\ **${ayarlar.PREFIX}atla\ : **Sıradaki şarkıyı atlar.
\ **${ayarlar.PREFIX}döngü\ : **Çalan şarkıyı sürekli tekrarlar.
\ **${ayarlar.PREFIX}durdur\ : **Şarkıyı durdurur.
\ **${ayarlar.PREFIX}devam\ : **Duran şarkıyı devam ettirir.
\ **${ayarlar.PREFIX}sıra\ : **Şarkı sırasını gösterir.
\ **${ayarlar.PREFIX}şarkı\ : **Oynatılan şarkının adını söyler.
\ **${ayarlar.PREFIX}davet\ : **Botun davet linkini atar.
`)
                       .setColor("000000")
                      )    
}
} 