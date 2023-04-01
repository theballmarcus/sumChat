const { SlashCommandBuilder } = require('discord.js');
const { ChatGPT } = require('../../gpt/build/chat')
const chatApiKey = require('../../config.json')["chatApiKey"]

module.exports = {
	data: new SlashCommandBuilder()
		.setName('summarize')
		.setDescription('Summarizes n amount of messages or minutes in chat. Default: messages'),
        
	async execute(interaction) {
		let sendPendingMessage = interaction.reply("Pending...").catch(error => {
			console.log(error);
		});
		interaction.channel.messages.fetch({limit: 30}).then(contextMsgs => {
		  const context = contextMsgs.map(msg => `${msg.member.user.tag}\n${msg.content}`).join('\n');
		  const api = new ChatGPT(chatApiKey);
		  askGPT = api.askGPT("Summarize what happened in this chat very shortly: \n" + context).catch(error => {
			console.log(error);
		  });
		  Promise.all([askGPT, sendPendingMessage]).then(values => {
			console.log("works")
			values[1].edit(values[0].data.choices[0].message)
		  }).catch(error => {
			console.log(error);
		  });
		}).catch(error => {
		  console.log(error);
		});  
	  }
};
