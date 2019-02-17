const Discord = require('discord.js');

const config = require('./config.json');
const cmds = require('./commandes.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`${bot.user.username} starting`);

    bot.user.setActivity('boire du Canada Dry');
});

bot.on('message', msg => {
    if (msg.author.bot || msg.channel.type != 'text')
        return; // Do not respond to messages from bots or messages that are not from guilds.

    if (!msg.content.startsWith(config.prefix))
        return; //Not a command.

    let cmd = msg.content.split(/\s+/)[0].slice(config.prefix.length).toLowerCase();
    getCmdFunction(cmd)(msg);
});

bot.login(config.token)

function getCmdFunction(cmd) {
    const COMMANDS = {
        'avatar': cmds.avatar,
        'join': cmds.join,
    }
    return COMMANDS[cmd] ? COMMANDS[cmd] : () => {};
}