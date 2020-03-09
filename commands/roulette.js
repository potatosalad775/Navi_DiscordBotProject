const { prefix } = require('../config.json');
var fs = require('fs');

var rouletteObj = {
	table: []
};

module.exports = {
	name: 'roulette',
	description: 'd a n g e r o u s russian roulette at discord server',
	execute(message, args) {
		if (!args.length) {
			message.channel.send(`게임모드를 선택해야합니다. 자세한 설명은 '${prefix}help roulette'에서 찾아볼 수 있습니다.`)
		}
		else {
			const NxtCmdName = args.shift().toLowerCase();
			var flag_cb = 0;

			switch (NxtCmdName) {
				case 'sap':
					message.channel.send('\:gun:')
					message.channel.send('. . .');
					setTimeout(function () {
						message.channel.send('\:boom:\:gun:')
						if (!message.mentions.users.size) message.reply('당신은 총에 맞았습니다!');
						else {
							const taggedUser = message.mentions.users.first();
							message.channel.send(`${taggedUser}, 당신은 총에 맞았습니다!`);
						}
					}, 1500);
					break;
				case 'solo':
					message.channel.send('\:gun:')
					message.channel.send('. . .');
					setTimeout(function () {
						var rand = Math.floor(Math.random() * 6);
						if (rand === 0) {
							message.channel.send('\:boom:\:gun:')
							message.reply('당신은 총에 맞았습니다!');
						}
						else {
							message.channel.send('\:gun:')
							message.reply('다행히도 총이 격발되지 않았네요...');
						}
					}, 1500);
					break;
				case 'together':
					const taggedUser = message.member.user.username;
					fs.readFile('roulette.json', 'utf8', function readFileCallback(err, data) {
						// json 파일이 없거나 빈 경우 JSON 파싱 건너뜀
						try {
							rouletteObj = JSON.parse(data);
						}
						catch (e) {
						}

						if (rouletteObj.table.length === 6) {
							message.reply('이미 세션에 6명이 들어가있어요!');
						}
						else {
							rouletteObj.table.push({ name: taggedUser });
							var json = JSON.stringify(rouletteObj);
							fs.writeFile('roulette.json', json, 'utf8', function (err) {
								if (err) {
									console.log('roulette json write error');
									message.channel.send('룰렛 파일 쓰기 실패!');
								} else {
									message.channel.send('룰렛 세션 등록 완료!');
								}
							});
						}
					});
					break;
				case 'session':
					fs.readFile('roulette.json', 'utf8', function readFileCallback(err, data) {
						if (err) {
							console.log('roulette json read error');
							message.channel.send('룰렛 파일 읽기 실패!');
						}
						else {
							console.log('roulette json read and output done');
							try {
								rouletteObj = JSON.parse(data);
								var rouletteStr = rouletteObj.table[0].name;
								for (var i = 1; i < rouletteObj.table.length; i++) {
									rouletteStr = rouletteStr.concat(', ');
									rouletteStr = rouletteStr.concat(rouletteObj.table[i].name);
								}
								message.channel.send('`' + rouletteStr + '`');
							}
							catch (e) {
								if (rouletteObj.table.length === 0) {
									message.channel.send('세션이 비어있습니다.');
								}
							}
						}
					});
					break;
				case 'start':
					fs.readFile('roulette.json', 'utf8', function readFileCallback(err, data) {
						if (err) {
							console.log('roulette json read error');
							message.channel.send('룰렛 파일 읽기 실패!');
						}
						else {
							rouletteObj = JSON.parse(data);
							var rand = Math.floor(Math.random() * 6);
							for (var i = 0; i < rouletteObj.table.length; i++) {
								var nameStr = rouletteObj.table[i].name

								message.channel.send('\:gun:')
								message.channel.send('. . .');
								setTimeout(function () {
								}, 1500);

								if (rand === i) {
									message.channel.send('\:boom:\:gun:')
									message.channel.send(nameStr + ', 당신은 총에 맞았습니다!');
								}
								else {
									message.channel.send('\:gun:')
									message.channel.send(nameStr + ', 다행히도 총이 격발되지 않았네요...');
								}
							}
							rouletteObj.table.splice(0);
							var json = JSON.stringify(rouletteObj);
							fs.writeFile('roulette.json', json, 'utf8', function (err) {
								if (err) {
									console.log('there was an error while writing and wiping roulette.json');
									message.channel.send('룰렛 파일 쓰기 및 지우기 실패!');
								} else {
									console.log('roulette file wipe successful');
								}
							});
						}
					});
					break;
			}
		}
	},
};