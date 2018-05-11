function returnReactionUsers(bot, msg, amountOfWinners, amountOfTime, giveawayItem) {
  if (!amountOfWinners || amountOfWinners < 1) throw new Error("Invalid amount of winners.");
  msg.channel.send("React with the :tada: emoji to enter the giveaway:", {embed: {
    author: {name: bot.user.tag, icon_url: bot.user.avatarURL},
    color: 0xff0000,
    title: `Giving away: **${giveawayItem.toString()}**`,
    description: `• This giveaway is going on for ${ms(ms(amountOfTime), {long: true})} \nThere can be only ${amountOfWinners} winner(s)!`,
    timestamp: new Date()
  }}).then(function(message) {
    setTimeout(function() {
      if (message.reactions.filter(r => r.emoji.toString() == "🎉").size == 0) {
        return message.edit("", {embed: {
          author: {name: bot.user.tag, icon_url: bot.user.avatarURL},
          color: 0xff0000,
          title: `Giveaway ended for: **${giveawayItem.toString()}**`,
          description: `Nobody voted with the designated emoji 😫`,
          timestamp: new Date()
        }});
      }
      message.reactions.filter(reaction => reaction.emoji.toString() == "🎉").map(function(r) {
        var selectedUsers = r.users.random(amountOfWinners);
        if (r.users.size < amountOfWinners) selectedUsers = r.users.random(r.users.size);
        message.edit("", {embed: {
          author: {name: bot.user.tag, icon_url: bot.user.avatarURL},
          color: 0xff0000,
          title: `Giveaway ended for: **${giveawayItem.toString()}**`,
          description: `Winners: ${selectedUsers}`,
          timestamp: new Date()
        }});
      });
    }, ms(amountOfTime));
  }).catch(error => console.error(error));
}
