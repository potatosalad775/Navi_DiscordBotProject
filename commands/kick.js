module.exports = {
	name: 'kick',
	description: 'kick!',
	execute(message, args) {
		if (!args.length) {
			message.reply('입력된 게 없어요! 어떤 걸 발로 차 줬으면 하시나요?');
		}
		else {
			if (!message.mentions.users.size) {
				var inputStr = args[0];
				for (var i = 1; i < args.length; i++) {
					inputStr = inputStr.concat(' ');
					inputStr = inputStr.concat(args[i]);
				}
	
				var rand = Math.floor(Math.random() * 8);
	
				switch (rand) {
					case 0:
						message.channel.send(inputStr + '을(를) 발로 한 대 찼습니다.');
						break;
					case 1:
						message.channel.send(inputStr + '을(를) 발로 세게 차서 날렸습니다. 우측담장! 우측담장~!!! 넘어~갑니다~~~!');
						break;
					case 2:
						message.channel.send(inputStr + '을(를) 발로 세게 차서 날렸습니다. 좌측담장! 좌측담장~!!! 넘어~갑니다~~~!');
						break;
					case 3:
						message.channel.send(inputStr + '을(를) 발로 세게 찼습니다. 산산조각나버렸네요...');
						break;
					case 4:
						message.channel.send(inputStr + '은(는) 저 멀리서 날라오는 Navi의 발로 전달된 운동 에너지를 직접 전달받았습니다.');
						break;
					case 5:
						message.channel.send(inputStr + '은(는) [부당하게 보일 수 있지만, 지극히 의도적인 디스코드 봇 디자인]으로 인해 발길질당했습니다.');
						break;
					case 6:
						message.channel.send('묘사가 너무 길어져서 ' + inputStr + '이(가) 어떻게 맞았는지 표현할 수가 없네요. 아무튼 발길질당했습니다.');
						break;
					case 7:
						message.channel.send('충돌 과정에서 변환된 일부 운동 에너지를 무시해도 될 만큼 ' + inputStr + '와(과) 발이 매우 강한 힘으로 탄성 충돌하였습니다..');
						break;
				}
			}
			else {
				const taggedUser = message.mentions.users.first();
				var rand = Math.floor(Math.random() * 10);
	
				switch (rand) {
					case 0:
						message.channel.send(`${taggedUser}의 엉덩이를 발로 한 대 찼습니다.`);
						break;
					case 1:
						message.channel.send(`${taggedUser}이(가) 먹던 콜라를 발로 차서 저 멀리 날려버렸습니다.`);
						break;
					case 2:
						message.channel.send(`${taggedUser}이(가) 먹던 과자를 발로 차서 저 멀리 날려버렸습니다.`);
						break;
					case 3:
						message.channel.send(`가만히 있던 ${taggedUser}을(를) 발로 한 대 찼습니다.`);
						break;
					case 4:
						message.channel.send(`걷고 있는 ${taggedUser}에게 달려가서 태클을 걸었습니다.`);
						break;
					case 5:
						message.channel.send(`${taggedUser}을(를) 잡고 싱글렉 테이크다운한 다음, 다스쵸크로 기절시켰습니다.`);
						break;
					case 6:
						message.channel.send(`${taggedUser}은(는) 저 멀리서 날라오는 Navi의 발로 전달된 운동 에너지를 몸소 체험했습니다.`);
						break;
					case 7:
						message.channel.send(`${taggedUser}은(는) [부당하게 보일 수 있지만, 지극히 의도적인 디스코드 봇 디자인]으로 인해 발길질당했습니다.`);
						break;
					case 8:
						message.channel.send(`묘사가 너무 길어져서 ${taggedUser}이(가) 어떻게 맞았는지 표현할 수가 없네요. 아무튼 발길질당했습니다.`);
						break;
					case 9:
						message.channel.send('충돌 과정에서 변환된 일부 운동 에너지를 무시해도 될 만큼' + inputStr + '와(과) 발이 매우 강한 힘으로 탄성 충돌하였습니다..');
						break;
				}
			}
		}
	},
};