var fs = require('fs');

var foodObj = {
	table: []
};

module.exports = {
	name: 'food',
	description: 'manage food list',
	execute(message, args) {
		if (!args.length) {
			fs.readFile('food.json', 'utf8', function readFileCallback(err, data) {
				if (err) {
					console.log('food json read error');
					message.channel.send('음식 리스트 읽기 실패!');
				}
				else {
					var rand = Math.floor(Math.random() * (foodObj.table.length));
					message.reply('내가 추천하는 메뉴는 `' + foodObj.table[rand].name + '`!');
				}
			});
		}
		else {
			// commandName에 2차 명령어 저장
			const commandName = args.shift().toLowerCase();
			var inputStr = args[0];
			for (var i = 1; i < args.length; i++) {
				inputStr = inputStr.concat(' ');
				inputStr = inputStr.concat(args[i]);
			}

			switch (commandName) {
				case 'add':
					// !food add 음식이름
					fs.readFile('food.json', 'utf8', function readFileCallback(err, data) {
						if (err) {
							console.log('food json read error');
							message.channel.send('음식 리스트 읽기 실패!');
						} else {
							foodObj = JSON.parse(data);
							foodObj.table.push({ name: inputStr });
							var json = JSON.stringify(foodObj);
							fs.writeFile('food.json', json, 'utf8', function (err) {
								if (err) {
									console.log('food json write error');
									message.channel.send('음식 리스트 쓰기 실패!');
								} else {
									message.channel.send('음식 `' + inputStr + '` 추가 완료!');
								}
							});
						}
					});
					break;

				case 'delete':
					// !food delete 음식이름
					fs.readFile('food.json', 'utf8', function readFileCallback(err, data) {
						if (err) {
							console.log('food json read error');
							message.channel.send('음식 리스트 읽기 실패!');
						}
						else {
							foodObj = JSON.parse(data);
							var flag = 0;
							for (var i = 0; i < foodObj.table.length; i++) {
								if (foodObj.table[i].name === inputStr) {
									foodObj.table.splice(i, 1);
									var json = JSON.stringify(foodObj);
									fs.writeFile('food.json', json, 'utf8', function (err) {
										if (err) {
											console.log('food json write error');
											message.channel.send('음식 리스트 쓰기 실패!');
										} else {
											console.log('food delete successful');
											message.channel.send('음식 `' + inputStr + '` 삭제 완료!');
										}
									});
									flag = 1;
									break;
								}
							}
							if (flag === 0) {
								message.channel.send('제거를 요청하신 음식을 리스트에서 찾지 못했습니다...');
							}
						}
					});
					break;

				case 'showall':
					// !food showAll - 음식 목록 모두 보기
					fs.readFile('food.json', 'utf8', function readFileCallback(err, data) {
						if (err) {
							console.log('food json read error');
							message.channel.send('음식 리스트 읽기 실패!');
						}
						else {
							console.log('food json read and output done');
							foodObj = JSON.parse(data);
							var foodStr = foodObj.table[0].name;
							for (var i = 1; i < foodObj.table.length; i++) {
								foodStr = foodStr.concat(', ');
								foodStr = foodStr.concat(foodObj.table[i].name);
							}
							message.channel.send('`' + foodStr + '`');
						}
					});
					break;
			}
		}
	},
};