const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    description: 'list of my useless commands for this bot',
    execute(message, args) {
        if (!args.length) {
            message.channel.send(
                '사용할 수 있는 명령어 모음\n' +
                `${prefix}help [명령어]로 더 자세한 정보를 알 수 있습니다.\n\n` +
                `${prefix}help : 지금 보고 계십니다.\n` +
                `${prefix}ping : 퐁!과 함께 Discord Websocket 연결 지연시간을 알려줍니다.\n` +
                `${prefix}kick : 태그된 사람이나 사물을 kick합니다.\n` +
                `${prefix}food : 음식 추천, 사용자의 음식 리스트 업데이트 지원.\n` +
                `${prefix}roulette : 러시안 룰렛을 플레이합니다. 추가 명령어 필수`
            );
        }
        else {
            const NxtCmdName = args.shift().toLowerCase();
            switch (NxtCmdName) {
                case 'help':
                    message.channel.send(
                        `${prefix}help로 사용할 수 있는 명령어들을 볼 수 있습니다.\n` +
                        `${prefix}help [다른 명령어]로 더 자세한 정보를 알 수 있습니다.\n` +
                        `${prefix}help help, ${prefix}help ping, ${prefix}help kick, ${prefix}help food 사용 가능`
                    );
                    break;
                case 'ping':
                    message.channel.send(
                        `${prefix}ping : 퐁!과 함께 Discord Websocket 연결 지연시간을 알려줍니다.\n` +
                        '그거 빼면 별 거 없음'
                    );
                    break;
                case 'kick':
                    message.channel.send(
                        `${prefix}kick [문자열] : 입력된 문자열(사물)을 kick합니다.\n` +
                        `${prefix}kick [사용자 태그] : 태그된 사람을 kick합니다.\n` +
                        '이 명렁어를 사용해도 실제로 디스코드 채널에서 유저를 kick하지는 않습니다.'
                    );
                    break;
                case 'food':
                    message.channel.send(
                        `${prefix}food : 리스트에서 무작위로 음식을 하나 골라 추천합니다.\n` +
                        `${prefix}food add [음식이름] : 리스트에 음식을 추가합니다. 중복체크는 이루어지지 않습니다.\n이를 악용하여 확률 주작이 가능합니다. (하지마세요)\n` +
                        `${prefix}food delete [음식이름]: 리스트에서 음식을 제거합니다.\n` +
                        `${prefix}food showAll: 리스트에 존재하는 모든 음식 이름을 보여줍니다.`
                    );
                    break;
                case 'roulette':
                    message.channel.send(
                        `${prefix}roulette solo : 혼자서 6발짜리 회전식 약실을 갖춘 리볼버로 러시안 룰렛을 플레이합니다.\n` +
                        `${prefix}roulette together : 최대 6명까지 모일 수 있는 러시안 룰렛 세션에 참가합니다. 1서버 1세션 원칙.\n` +
                        `${prefix}roulette session : ${prefix}roulette together로 모인 사람을 확인합니다.\n` +
                        `${prefix}roulette start : ${prefix}roulette together로 모인 사람끼리 러시안 룰렛을 플레이합니다. 게임이 끝나면 세션이 비워집니다.\n` +
                        `${prefix}roulette sap [사용자 태그] : 태그된 사람을 향해서 자동권총(Semi-Automatic Pistol)으로 러시안 룰렛을 플레이합니다. 태그된 사람이 없을 경우 혼자서 즐깁니다.`
                    );
                    break;
            }
        }
    }
}