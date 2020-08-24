var ids = '531186390717825074';
module.exports = {
  catagory: 'bot',
  name: 'help',
  desc: '(The one you just ran!) List of all commands!',
  aliases: ['?', 'cmds'],
  execute(message, args, client) {
 const commands = client.commands;
      const data = [];
      if (args[0]) {const name = args[0].toLowerCase();
const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

if (!command) {
	return message.reply('That\'s not a valid command!');
}

data.push(`**Name:** ${command.name}`);

if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
if (command.description) data.push(`**Description:** ${command.description}`);
if (command.usage) data.push(`**Usage:** -${command.name} ${command.usage}`);

data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

message.channel.send(data, { split: true })} else {
      const cArray = client.commands.array();
      data.push(commands.map(command => command.name));
      console.log(data + ' data')
      //Create the embeds
      const Discord = require('discord.js');
      const MessageEmbed = Discord.MessageEmbed;

      const mainEmbed = new MessageEmbed()
      .setTitle('HELP')
      .setDescription('');
      data.forEach(cmdd => {
cmdd.forEach(cmd => {
  var catagory = commands.get(cmd).catagory;
   var dsc = commands.get(cmd).desc;
        {mainEmbed.addField(cmd, dsc, true)}
      });
      message.channel.send(mainEmbed);
        });
  
         }}
};
