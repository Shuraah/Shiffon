const config = require('./config.json');

module.exports = {
    'avatar': avatar,
    'join': join,
}

function avatar(msg){
    if (msg.content === config.prefix + 'avatar') {
        msg.reply(msg.author.avatarURL);
    };
};

function join(msg){
    if (msg.content === config.prefix + 'join') {
        msg.channel.send('Désolé, je ne connais pas encore cette commande');
    };
};
