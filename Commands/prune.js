exports.run = function(bot, msg, args) {
    let mentionedUser = msg.mentions.users.first();
    if (!mentionedUser) return bot.embed(msg, 0xff0000, "Invalid user mention:", "Please mention a user to prune their messages.");
    let messageAmount = args[1];
    if (!messageAmount) return bot.embed(msg, 0xff0000, "Invalid amount specification:", "Specify how many messages you want to delete.");
    if (isNaN(messageAmount)) return bot.embed(msg, 0xff0000, "Invalid amount specification:", "Please enter a number!");
    let parsedMessageAmount = parseInt(messageAmount);
    if (parsedMessageAmount > 100) return bot.embed(msg, 0xff0000, "Invalid amount specified!", "Amount needs to be less than or equal to 100 to prune.");
    msg.channel.fetchMessages({parsedMessageAmount}).then(message => {
      let messageArray = message.array();
      let filteredArray = messageArray.filter(msg => msg.author.id == mentionedUser.id);
      msg.channel.bulkDelete(filteredArray);
    });
    bot.embed(msg, 0xff0000, "Successfully pruned messages!", `Pruned ${messageAmount} from ${mentionedUser}`);
};

exports.conf = {
  activated: true,
  aliases: [],
  permLevel: 2
};
  
  exports.help = {
    name: 'prune',
    description: 'Prunes messages from mentioned user.',
    usage: 'prune [mention] [number <1 - 100>]'
  };
