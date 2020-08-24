var ids = '531186390717825074';
module.exports = {
  catagory: 'mod',
  name: 'announce',
  desc: 'announce something.',
  usage: 'announce <announcement>',
  execute: async (message, args, client, db, packageInfo, Discord) => {
 if (!client.channels.cache.get(746032876323078257).permissionsFor(message.author).has('SEND_MESSAGES') && !ids.includes(message.author.id)) return;
   if (!args[0]) return message.reply('Please Imput A Announcement!');;
    args = args.join(" ");
      const embed = new Discord.MessageEmbed()
      .setTitle('ANNOUNCEMENT!')
      .setAuthor(message.author.username, message.author.avatarURL())
      .setDescription(args)                
      .setColor(16295218);
client.channels.cache.get(746032876323078257).send(embed)
if (message.deletable) return message.delete();
  }
};