module.exports = {
	name: 'kick',
	description: 'kick!',
	execute(message, args) {
		if (!message.mentions.users.size) {
			return message.reply('kick할 유저를 태그해주세요!');
		}
		else {
			const taggedUser = message.mentions.users.first();
			var rand = Math.floor(Math.random() * 6);

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
			}
		}
	},
};