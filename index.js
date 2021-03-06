const Discord = require('discord.js');
const express = require('express');
const app = express();
const fs = require('fs');
const db = require('quick.db');
const client = new Discord.Client
const token = process.env.TOKEN;
const prefix = process.env.PREFIX;
client.commands = new Discord.Collection();
const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
client.once('ready', () => {
	console.log('Ready to go!');
client.user.setActivity(`Playing Fortnite With Random People`, { type: 'PLAYING' });
});
const commandFolder = fs.readdirSync('./cmds').filter(file => file.endsWith('.js'));

for (const file of commandFolder) {
    const command = require(`./cmds/${file}`);

    client.commands.set(command.name, command);
}

client.on('message', message => {
  if(message.author.bot) return;       
  	const prefixRegex = new RegExp(`^(<@!?${client.user.id}> |${escapeRegex(prefix)})\\s*`);
	if (!prefixRegex.test(message.content)) return;
	const [, matchedPrefix] = message.content.match(prefixRegex);
	const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);

	const commandName = args.shift().toLowerCase();
if (message.author.id == '745786473554378832') return; // SBT
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	if (!command) return;

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	
};
 
	try {
    const packageInfo = require('./package.json');
		command.execute(message, args, client, db, packageInfo, Discord);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});


client.login(token);


// Web Stuff
app.get('/', (req, res) => {
    res.send(`ONLINE`);
});
app.get('/cdn/:fname', (req, res) => {
 if (!fs.readFileSync('./cdn/' + req.params.fname)) r404(res)
 else
  res.sendFile(__dirname + '/cdn/' + req.params.fname);
});
app.listen(3000, () => console.log('Online!'));
