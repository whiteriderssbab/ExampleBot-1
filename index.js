const disocrd = require("discord.js")//adds the package discord.js. In your terminal run npm i discord.js
const bot = new Discord.Client({
	disableEveryone: true
}); //adds the client 'bot'

//uptime command:
if(command === "uptime") {
let totalSeconds = (bot.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
  
const embed = new Discord.RichEmbed()
      .setTitle("Uptime")
      .setColor('RANDOM')
      .addField("Days", `${days}  `)
      .addField("Hours", `${hours}  `)
      .addField("Minutes", `${minutes}  `)
message.channel.send({embed})

}
//ban command
if(command === 'ban'){
let has_ban = perms.has("BAN_MEMBERS")
if(has_ban){
const user = message.mentions.users.first() || bot.users.get(args[0])
if(user){
const member = message.guild.member(user)
if(member){
if(member.bannable)
await member.ban({
reason: `${args.slice(1).join(' ')}`,
}).then(() => {
message.channel.send(`${message.author.username} banned ${member.user.username} for ${member.ban.reason}`)
}).catch(err => message.channel.send(`Error: ${err}`)
})
}else{
message.channel.send('That user isn\'t in this server')
}}else{
message.channel.send("You didn't specify a user to ban")
}}else{
message.channel.send("You can't use this command")
}}
//kick command
if(command === 'kick'){
let has_kick = perms.has("KICK_MEMBERS")
if(has_kick){
const user = message.mentions.users.first() || bot.users.get(args[0])
if(user){
const member = message.guild.member(user)
if(member){
if(member.kickable)
await member.kick({
reason: `${args.slice(1).join(' ')}`,
}).then(() => {
message.channel.send(`${message.author.username} kicked ${member.user.username} for ${member.kick.reason}`)
}).catch(err => message.channel.send(`Error: ${err}`)
})
}else{
message.channel.send('That user isn\'t in this server')
}}else{
message.channel.send("You didn't specify a user to kick")
}}else{
message.channel.send("You can't use this command")
}}
//purge command
if(command === 'purge'){
let has_mngmsg = perms.has("MANAGE_MESSAGES")
if(has_mngmsg){
const deleteCount = parseInt(args[0], 10)
if(!deleteCount || deleteCount < 2 || deleteCount > 100)
return message.reply("Please provide a number between 2 and 100 for messages to purge")
const fetched = await message.channel.fetchMessages({limit : deleteCount})
message.channel.bulkDelete(fetched)
.catch(err=> message.reply(`Error; ${err}`))
}else{
message.reply("You cannot use that!")
}}
//status command
if(command === 'status') {
    if(message.author.id == ownerID) { //change ownerID to your ID
    bot.user.setActivity(`${args.join(' ')}`)
    message.channel.send('✅ Successfully changed status')
  }}
//say command
if (command === 'say') {
    if (!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send('You don\'t have permissions to use this command.')//done, they need the 'BAN_MEMBERS' permission to use the command.
    let saymessage = args.join(" ");//
    if (!saymessage) return message.channel.send('Please Give Text');//return a message if they don't provide text.
    message.channel.send(saymessage);//send the message.
    message.delete()
  }
//eval command
if(command === "eval") {
if(message.author.id == ownerID) { //change ownerID to your ID
      try {
        const code = args.join(" ");
        let evaled = eval(code);
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
        message.channel.send(evaled)
      }catch (err) {
        console.log(err)
      }}} //REMEMER EVAL IS VERY DANGEROUS. IF SOMEONE SOME HOW GETS HOLD OF THIER ID IN THE CODE THEY CAN BAN EVERYONE IN EVERY SERVER THE BOT IS IN OR WORSE DELETE THE SEVRERS.
