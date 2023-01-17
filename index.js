const discord = require('discord.js');
const client = new discord.Client({ intents: [1, 512, 32768, 2, 128]});

client.login('MTA2NDY4NjQxNzIxMDUwNzI4NA.GRdQRO.N33j10J846pn_STvjiVoUAZFwzwklDcDVx31zM');

client.on('voiceStateUpdate', (oldState, newState) => {
    if(newState.channelId == undefined) return;

    const voiceChannel = client.channels.cache.get(newState.channelId);

    const membersLimit = voiceChannel.userLimit;

    if(membersLimit == 0) return;

    const membersCount = voiceChannel.members.size;

    if(membersCount > membersLimit) {
        newState.member.voice.disconnect()

        const channelMessage = client.channels.cache.find(channel => channel.name === 'geral')

        channelMessage.send(`Usuário <@${newState.member.id}> desconectado por limite de pessoas conectadas`);
    }
});

