  
const fs = require('fs')
module.exports = {
    execute(msg, _, __, ___, ____, _______) {try{
        if (msg.member.hasPermission("BAN_MEMBERS")) {
            try {
                msg.mentions.members.first().kick();
                embed
                 .setThumbnail()
                 .setColor('#0099ff')
                 .setTitle('USER | KICKED')
                 .setDescription("`Kicked: " + msg.mentions.members.first().user.username + "#" + msg.mentions.members.first().user.discriminator + ", id: " + msg.mentions.members.first().id + "`\n");
                fs.readFile('users.json', 'utf8', function(err, data){ 
                 try { client.channels.cache.get(JSON.parse(data)[msg.guild.id]["logs"]).send(embed); } catch { }
                })  
              } catch {}
        }}catch{}
    }
}
