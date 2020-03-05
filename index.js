const fs = require('fs');
const Discord = require('discord.js');
const { prefix } = require('./config.json');
const dotenv = require('dotenv');
dotenv.config();

const client = new Discord.Client();
client.commands = new Discord.Collection();

// ./commands 파일 안 commandFiles 불러오는 기능.
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// collection에 새 기능 추가.
	// ~.set(key, value) -> ~.get(key).function()로 함수 실행
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready and Connected!');
});

client.on('message', message => {
	// prefix 누락 또는 봇 메시지일 경우 무시
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	// 띄어쓰기 단위로 string 분할
	const args = message.content.slice(prefix.length).split(/ +/);
	// commandName에 첫 단어 저장, arg 첫 요소 제거 후 한 칸 씩 당김.
	const commandName = args.shift().toLowerCase();

	switch (commandName) {
		case 'ping':
			message.reply('\nPong! `' + Math.floor(client.ws.ping) + ' ms`');
			break;
		case 'kick':
			client.commands.get('kick').execute(message, args);
			break;
		case 'food':
			client.commands.get('food').execute(message, args);
			break;
		case 'help':
			client.commands.get('help').execute(message, args);
			break;
		case 'roulette':
			client.commands.get('roulette').execute(message, args);
			break;
	}
});

client.login(process.env.DISCORDBOT_TOKENKEY);