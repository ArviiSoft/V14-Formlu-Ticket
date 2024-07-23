const Discord = require('discord.js');//arviis.
  const db = require("croxydb")//arviis.
//arviis.
  exports.run = async (client, button, args) => {//arviis.
    if(!button.member.permissions.has("ADMINISTRATOR")) 
      return button.channel.send("Bu Komutu Kullanabilmek İçin `Yönetici` Yetkisine Sahip Olmalısın")//arviis.
//arviis.
      let role = button.mentions.roles.first();
      if (!role)//arviis.
        return button.reply("**arviis.:** Bir Rol Etiketlemen Gerekiyor \n\nhttps://media.discordapp.net/attachments/997105193256747028/1043167898484604958/image.png").catch(() => {})
          button.react("<:tik_arvis:1035231831815106611>")

.then(async (cs) => {
  db.set("destek" + button.guild.id, {
    rolID: role.id
  });
    }).catch(() => {})
  //arviis.
}
exports.conf = {
  aliases: ["ty"]
};

exports.help = {
  name: "ticket-yetkili"
};//arviis.










//arviis.