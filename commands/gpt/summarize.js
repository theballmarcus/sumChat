const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('summarize')
		.setDescription('Summarizes n amount of messages or minutes in chat. Default: messages'),
        
	async execute(interaction) {
        //New code here.
		await interaction.reply('Pong!');
	},
};
