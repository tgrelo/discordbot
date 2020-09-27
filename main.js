const Discord = require ('discord.js');
const client = new Discord.Client();
const process = require('process');

const prefix = '%';



client.once('ready',() => {
    console.log('Textbot is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot ) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong');
        
    }
    else if (command === 'pisoc'){
        message.channel.send('JOIN PISOC!');
    }
    else if (message.content === `${prefix}server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }
    

});

client.login(process.env['DISCORD_TOKEN']);/*add the token here*/ 


/*Made by Tiago all right reserved to me*/