
const { SlashCommandBuilder } = require('discord.js');

const PingCommand = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Ponggggg!'),
    async execute(interaction) {
        await interaction.reply('Ponggggg!');
    }
}

module.exports = PingCommand;