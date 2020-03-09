module.exports = {
	name: 'kick',
	description: 'kick!',
	execute(message, args) {
		if (!message.mentions.users.size) {
			return message.reply('kick할 유저를 태그해주세요!');
		}
		else {
			const taggedUser = message.mentions.users.first();
			var rand = Math.floor(Math.random() * 9);

			switch (rand) {
				case 0:
					message.channel.send(`${taggedUser}의 엉덩이를 발로 한 대 찼습니다.`);
					break;
				case 1:
					message.channel.send(`${taggedUser}가 먹던 콜라를 발로 차서 저 멀리 날려버렸습니다.`);
					break;
				case 2:
					message.channel.send(`${taggedUser}가 먹던 과자를 발로 차서 저 멀리 날려버렸습니다.`);
					break;
				case 3:
					message.channel.send(`가만히 있던 ${taggedUser}를 발로 한 대 찼습니다.`);
					break;
				case 4:
					message.channel.send(`걷고 있는 ${taggedUser}에게 달려가서 태클을 걸었습니다.`);
					break;
				case 5:
					message.channel.send(`${taggedUser}을 잡고 싱글렉 테이크다운한 다음, 다스쵸크로 기절시켰습니다.`);
					break;
				case 6:
					message.channel.send(`${taggedUser}는 저 멀리서 날라오는 Navi의 발로 전달된 운동 에너지를 몸소 체험했습니다.`);
					break;
				case 7:
					message.channel.send(`${taggedUser}는 [부당하게 보일 수 있지만, 지극히 의도적인 디스코드 봇 디자인]으로 인해 발길질당했습니다.`);
					break;
				case 8:
					message.channel.send(`묘사가 너무 길어져서 ${taggedUser}가 어떻게 맞았는지 표현할 수가 없네요. 아무튼 발길질당했습니다.`);
					break;
			}
		}
	},
};