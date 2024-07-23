const {PermissionsBitField, EmbedBuilder, ButtonStyle, Client, GatewayIntentBits, ChannelType, Partials, ActionRowBuilder, SelectMenuBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, InteractionType, SelectMenuInteraction, ButtonBuilder } = require("discord.js");
const config = require("./config.js");//arviis.
const db = require("croxydb")
const client = new Client({
  partials: [
    Partials.Message, 
    Partials.Channel, 
    Partials.GuildMember, 
    Partials.Reaction, 
    Partials.GuildScheduledEvent,
    Partials.User, 
    Partials.ThreadMember, 
  ],//arviis.
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMembers, 
    GatewayIntentBits.GuildBans, 
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildWebhooks, 
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildVoiceStates, 
    GatewayIntentBits.GuildPresences, 
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions, 
    GatewayIntentBits.GuildMessageTyping, 
    GatewayIntentBits.DirectMessages, 
    GatewayIntentBits.DirectMessageReactions, 
    GatewayIntentBits.DirectMessageTyping, 
    GatewayIntentBits.MessageContent, 
  ],
});
//arviis.
module.exports = client;

require("./events/message.js")



  modal.addComponents(row);
client.on('interactionCreate', async (interaction) => {

	if(interaction.customId === "ticket"){
    await interaction.showModal(modal);
	}
})  

const mod = new ModalBuilder()
.setCustomId('eklemenu')
.setTitle('Kullanıcı EKle')
  const e = new TextInputBuilder()
  .setCustomId('uyeid')
  .setLabel('Kullanıcı ID')
  .setStyle(TextInputStyle.Paragraph) 
  .setMinLength(10)
  .setPlaceholder('Örnek: 216222397349625857')
  .setRequired(true)
  const row2 = new ActionRowBuilder().addComponents(e);
  //arviis.
  mod.addComponents(row2);
client.on('interactionCreate', async (interaction) => {
})  

const mod2 = new ModalBuilder()
.setCustomId('eklemenu2')
.setTitle('Kullanıcı Çıkar')
  const a = new TextInputBuilder()
  .setCustomId('cikarid')
  .setLabel('Kullanıcı ID')
  .setStyle(TextInputStyle.Paragraph) 
  .setMinLength(10)
  .setPlaceholder('Örnek: 216222397349625857')
  .setRequired(true)
  const row3 = new ActionRowBuilder().addComponents(a);
  //arviis.
  mod2.addComponents(row3);
client.on('interactionCreate', async (interaction) => {

	if(interaction.customId === "çıkar"){
    await interaction.showModal(mod2);
	}
})  
client.on('interactionCreate', async interaction => {
  if (interaction.type !== InteractionType.ModalSubmit) return;
  if (interaction.customId === 'form') {
    const sebep = interaction.fields.getTextInputValue('sebep')
  
const row = new ActionRowBuilder()
.addComponents( 
  new SelectMenuBuilder()
  .setCustomId('del')
.setPlaceholder('Ayarlar')
.addOptions([
{
label: 'Destek Talebini Sil',
description: 'Direkt Olarak Kanalı Siler',
emoji: "<:kirmizinokta_arvis0011:997074336395579574>", 
value: 'delete',
},
{
  label: "Üye Ekle/Çıkar",
  description: 'ID Girerek Destek Talebine Üye Ekle/Çıkar',
  emoji: "<:kirmizinokta_arvis0011:997074336395579574>", 
  value: "arvis"
  
}
])
);//arviis.

  let data3 =  db.get("destek"+ interaction.guild.id)
  let roleStaff = interaction.guild.roles.cache.get(data3.rolID)
  let DejaUnChannel = interaction.guild.channels.cache.find(c => c.topic == interaction.user.id)//arviis.
              if (DejaUnChannel) return interaction.reply({content: '**arviis.:** Halihazırda Açık Bir Destek Talebin Bulunuyor', ephemeral: true})//arviis.
              interaction.guild.channels.create({
              name: `ticket-${interaction.user.username}`,
                type: ChannelType.GuildText,
        
                permissionOverwrites: [
                  {   
                      id: interaction.guild.id,
                      deny: [PermissionsBitField.Flags.ViewChannel]
                  },
                  {
                      id: interaction.user.id,
                      allow: [PermissionsBitField.Flags.ViewChannel]
                  },
                  {
                      id: roleStaff,
                      allow: [PermissionsBitField.Flags.ViewChannel]
                  }
              ]
            })
            
                  
                  .then((c)=>{
                 
                      const i1 = new EmbedBuilder()
                      .setTitle('Yeni Bir Destek Talebi Var')
                      .setDescription(`**Sebep:** ${sebep} \n\n**Oluşturan:** ${interaction.user}`)
                      .setColor("#2f3136")
                      .setImage("https://media.discordapp.net/attachments/997105193256747028/1043158198212886538/ArviS_Imza_BEYAZ.png?width=1440&height=288")
			                .setThumbnail("https://media.discordapp.net/attachments/997105193256747028/1043158198212886538/ArviS_Imza_BEYAZ.png?width=1440&height=288")
                      c.send({embeds: [i1], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                      interaction.reply({content: `**arviis.:** Destek Talebin Açıldı (<#${c.id}>)`, ephemeral: true})
                  })
          
          }
        })
        client.on('interactionCreate', async interaction => {
          if (!interaction.isSelectMenu()) return;
          if(interaction.customId === "del") {
            if (interaction.values[1] == "panel") {
              await interaction.deferUpdate()
const row2 = new ActionRowBuilder()
.addComponents(
new ButtonBuilder()
.setLabel("Ekle")
.setStyle(ButtonStyle.Success)
.setCustomId("ekle"),
new ButtonBuilder()
.setLabel("Çıkar")
.setStyle(ButtonStyle.Danger)
.setCustomId("çıkar"),
new ButtonBuilder()
.setLabel("Sil")
.setStyle(ButtonStyle.Secondary)
.setCustomId("sil")
)
const embed = new EmbedBuilder()
.setTitle("Üye Ekleme/Çıkarma")
.setDescription("Aşağıdaki Butonları Kullanarak Üye Ekleyebilir/Çıkartabilirsin")
.setColor("#2f3136")
.setImage("https://media.discordapp.net/attachments/997105193256747028/1043158198212886538/ArviS_Imza_BEYAZ.png?width=1440&height=288")
.setThumbnail("https://media.discordapp.net/attachments/997105193256747028/1043158198212886538/ArviS_Imza_BEYAZ.png?width=1440&height=288")
let message = await interaction.channel.messages.fetch(interaction.message.id)
await message.edit({embeds: [embed], components: [row2]})
          }
        }
        })
        client.on('interactionCreate', async interaction => {
          if (interaction.type !== InteractionType.ModalSubmit) return;
          if (interaction.customId === 'eklemenu') {
            const id = interaction.fields.getTextInputValue('uyeid')
            const channel = interaction.channel
                channel.permissionOverwrites.create(
                  id, {ViewChannel: true}
                  
                  )
                  interaction.reply({content: `**arviis.:** (<@${id}>) Destek Talebine Eklendi`})
                } else {
                
          }//arviis.
        })//arviis.
        client.on('interactionCreate', async interaction => {
          if (interaction.type !== InteractionType.ModalSubmit) return;
          if (interaction.customId === 'eklemenu2') {
            const id = interaction.fields.getTextInputValue('cikarid')
            const channel = interaction.channel
                channel.permissionOverwrites.create(
                  id, {ViewChannel: false}
                  //arviis.
                  )
                  interaction.reply({content: `**arviis.:** (<@${id}>) Destek Talebinden Atıldı`})
                } else {
               
          }//arviis.
        })
        client.on('interactionCreate', async interaction => {
        if (!interaction.isSelectMenu()) return;
        if(interaction.customId === "del") {//arviis.
          if (interaction.values[0] == "delete") {
            let log = db.fetch(`log_${interaction.guild.id}`)
              const channel = interaction.channel
              channel.delete();
              client.channels.cache.get(log).send(`**Desteği Silen:** <@${interaction.user.id}> \n\n**Silinen Kanal:** ${interaction.channel.name}`)
            
          }
        }
        })//arviis.
        client.on('interactionCreate', async interaction => {
          if (!interaction.isButton()) return;//arviis.
          if(interaction.customId === "sil") {
              let log = db.fetch(`log_${interaction.guild.id}`)
                const channel = interaction.channel
                channel.delete();//arviis.
                client.channels.cache.get(log).send(`**Desteği Silen:** <@${interaction.user.id}> \n\n**Silinen Kanal:** ${interaction.channel.name}`)
              
            //arviis.
          }
          })
      
          client.login(config.token)
















          //arviis.//arviis.
          //arviis.