const { Command, CommandType } = require('gcommands');
const Discord = require('discord.js')

new Command({
	name: 'help',
	description: 'Show all commands',
	type: [CommandType.SLASH, CommandType.MESSAGE],
	run: (ctx) => {
        const embed = new Discord.MessageEmbed
        embed.setTitle('Help')
        embed.setDescription('**šµ Moderation**\n`/purge`\nš**Polls**\n`/poll`\nš**Other**\n`/ping`,`/bot`,`/invite`, `/announcement`')
        embed.setColor('RANDOM')
        ctx.reply({ embeds: [embed]})
	}
});