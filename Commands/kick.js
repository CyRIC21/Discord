exports.run = async function(bot, msg, args) {
    const user = msg.mentions.users.first() || bot.users.get(args[0]);
    if (!user) return bot.embed(msg, 0xff0000, "Invalid user mention:", "Couldn't find mention or user is invalid.");
    var reason = args.slice(1).join(" ");
    if (!reason) reason = "No reason was provided!";
  
    bot.fetchMember(msg, user).then(function(member) {
      const commandUser = msg.member.highestRole.position;
      const targetUser = member.highestRole.position;
      const clientUser = bot.highestRole(msg);
      if (commandUser <= targetUser) return bot.embed(msg, 0xff0000, "Invalid Permissions:", "User has a higher role then you.");
      if (clientUser <= targetUser) return bot.embed(msg, 0xff0000, "Invalid Permissions:", "User has a higher role then me.");
      member.kick(`${reason} = Kick performed by: ${msg.author.tag}`);
      bot.embed(msg, 0xff0000, "Successfully kicked user:", `User: ${user.tag} \nReason: ${reason}`);
    }).catch(error => bot.embed(msg, 0xff0000, "Encountered an error", `\`\`\`${error.stack}\`\`\``));
  }
  
exports.conf = {
  activated: true,
  aliases: ["deport"],
  permLevel: 2
};
    
exports.help = {
  name: 'kick',
  description: 'Kicks mentioned user with specified reason.',
  usage: 'kick [mention/id] [reason]'
};