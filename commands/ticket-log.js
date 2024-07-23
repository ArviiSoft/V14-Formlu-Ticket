const Discord = require('discord.js');//arviis.
  const db = require("croxydb")//arviis.

  exports.run = async (client, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR")) 
      return message.reply("Bu Komutu Kullanabilmek İçin `Yönetici` Yetkisine Sahip Olmalısın");
//arviis.
    let log = message.mentions.channels.first()//arviis.
      if(!log) 
    return message.reply({content: "**arviis.:** Kanal Etiketlemen Gerekiyor \n\nhttps://media.discordapp.net/attachments/997105193256747028/1043167775927058452/image.png"})
    //arviis.
  message.reply("<:tik_arvis:1035231831815106611> Log Kanalı Ayarlandı")
    db.set(`log_${message.guild.id}`, log.id)
    
}//arviis.
exports.conf = {
  aliases: ["tl"]
};

exports.help = {
  name: "ticket-log"//arviis.
};//arviis.

  








//arviis.