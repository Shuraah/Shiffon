const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
var prefix = "$"

client.login(token);
