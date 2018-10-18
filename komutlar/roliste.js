const Discord = require('discord.js');


exports.run = function(client, message, args) {

	var roliste = args.slice(0).join(' ');
	var guildID = "501775306546216960";
	var channelID = "502481162254680074";

	if (k!.roliste){
		return message.reply("Kardeş Malmısın Hangi Rolu isteyeceğini de Yanına Yazsana! Doğru kullanım: **k.roliste <mesaj>**");
	} else {

		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Eylem:", "Rol İste")
			.addField("Kullanıcı:", message.author.tag)
			.addField("ID", message.author.id)
			.addField("Rol İste", "Rol İste")

		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.channel.send("Rol İsteğiniz Alınmıştır Eğer Rol Reddedilirse Daha Çok Çabalayın!!");
	};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["roliste"],
  permLevel: 0
};

exports.help = {
  name: 'roliste',
  description: "rol istersiniz",
  usage: 'roliste <mesaj>'
};
