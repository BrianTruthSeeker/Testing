const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDkxODg2Mzk5MjI2NjQyNDM0.DoOYnw.msvaNz3R6ifmr612LjfZs2VVFAk);
