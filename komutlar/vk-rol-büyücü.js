const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();

exports.run = async(client, message, args) => {
  if(!message.member.roles.cache.find(x => x.name == "Vampir Köylü Yetkilisi")) return message.channel.send(`Bu komutu kullanabilmek için önce **Vampir Köylü Yetkilisi** olmalısınız.`)
// ArdaDemr Youtube Kanalına Ait Vampir Köylü Bot Altyapısı
  let ardademruser = message.mentions.users.first()
  let dmirbotuser = message.author


  const roller = ["Büyücü"]
  const rolata = roller[Math.floor(Math.random()*roller.length)];


  ardademruser.send(new Discord.MessageEmbed().setColor('#efff00').setFooter(`Rolün: ${rolata}`).setDescription(`${dmirbotuser} tarafından vampir köylü oyununa dahil edildiniz.`))
// ArdaDemr Youtube Kanalına Ait Vampir Köylü Bot Altyapısı
    message.delete({ timeout: 1500 }) 
    db.add(`yaşıyor${message.guild.id}`,1)
}
exports.conf = {
     enabled: true,
     guildOnly: true,
     aliases: ["büyücüyap"],
     permLevel: 0
      };
      
exports.help = {
       name: "büyücü"
      };