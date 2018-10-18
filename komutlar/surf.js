const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eðlence Komutlarý Özel Mesajlarda Kullanýlamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + ' Dalgalara dikkat!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://www.google.com.tr/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwju3uG-jpDeAhUG2aQKHUPtDc8QjRx6BAgBEAU&url=https%3A%2F%2Fgfycat.com%2Fgifs%2Fsearch%2Fawesome%2Bsurf%2Bgifs&psig=AOvVaw2UT0KRE09RhQKyBre2SepI&ust=1539956274129503`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'surf',
  description: 'Surf Yaparsýnýz.',
  usage: 'surf'
};
