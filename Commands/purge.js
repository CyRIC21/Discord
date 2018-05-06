exports.run = function(bot, msg, args) {
    var messageAmount = args[0];
    if (!messageAmount) return bot.embed(msg, 0xff0000, "Invalid amount specification:", "Specify how many messages you want to delete.");
    if (isNaN(messageAmount)) return bot.embed(msg, 0xff0000, "Invalid amount specification:", "Please enter a number!");
    var parsedMessageAmount = parseInt(messageAmount);
    if (parsedMessageAmount > 100) return bot.embed(msg, 0xff0000, "Invalid amount specified!", "Amount needs to be less than or equal to 100 to purge.");
    msg.channel.fetchMessages({limit: parsedMessageAmount});
    msg.channel.bulkDelete(parsedMessageAmount, true);
    bot.embed(msg, 0xff0000, "Successfully purged messages!", `Purged: ${messageAmount} messages!`);
};

exports.conf = {
  activated: true,
  aliases: [],
  permLevel: 2
};
  
exports.help = {
  name: 'purge',
  description: 'Purges messages from 1 - 100.',
  usage: 'purge [number <1-100>]'
};