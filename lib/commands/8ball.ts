export default (home_scope: HomeScope) => {
	const { message, args, HELP_SECTIONS, KNOWN_COMMANDS } = home_scope;

	if (args.length === 0 || args[0] === 'help') {
		message.channel.send(
			HELP_SECTIONS[KNOWN_COMMANDS.indexOf('8ball')].trim());
		return;
	}

	const responses: string[] = [
		"Perhaps.",
		"Yep.",
		"Nope.",
		"For sure.",
		"Maybe, maybe not.",
		"As I see it, yes.",
		"Ask again later.",
		"Better not tell you now.",
		"Cannot predict now.",
		"Concentrate and ask again.",
		"Don’t count on it.",
		"It is certain.",
		"It is decidedly so.",
		"Most likely.",
		"My reply is no.",
		"My sources say no.",
		"Outlook not so good.",
		"Outlook good.",
		"Reply hazy, try again.",
		"Signs point to yes.",
		"Very doubtful.",
		"Without a doubt.",
		"Yes.",
		"Yes – definitely.",
		"You may rely on it.",
	];

	message.answer(":8ball: "
		+ responses[Math.floor(Math.random() * responses.length)]);
};
