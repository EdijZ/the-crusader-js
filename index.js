const Discord = require('discord.js');
require('dotenv').config();

const Client = new Discord.Client({
  intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_PRESENCES'],
});

Client.once('ready', () => {
  console.log('Working!');
});

Client.on('message', (message) => {
  if (message.author.id === Client.user.id) return;
  if (message.content.toLocaleLowerCase().includes('hello')) {
    message.channel.send(`${message.author.username}, Hello!`);
  } else if (message.content.toLowerCase().includes('anime')) {
    message.reply(
      `https://tenor.com/view/server-not-for-anime-anime-funny-cat-esi-gif-18464342`
    );
  } else if (message.content.toLowerCase().includes('xd')) {
    message.reply(
      `https://cdn.discordapp.com/attachments/707559271793164292/941828954128547892/tenor.gif`
    );
  }
});
Client.on('presenceUpdate', (before, after) => {
  after.activities.forEach((activity) => {
    if (
      activity.name.toLowerCase().includes('league of legends') ||
      activity.name.toLowerCase().includes('genshin impact')
    ) {
      if (after.member.kickable) {
        after.member.kick();
      }
    }
  });
});

Client.login(process.env.TOKEN);
