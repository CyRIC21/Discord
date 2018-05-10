const ms = require("ms");

function returnReactionUsers(messageID, amountOfWinners, amountOfTime) {
  if (!messageID) throw new Error("No message ID provided.");
  if (!amountOfWinners || amountOfWinners < 1) throw new Error("Invalid amount of winners.");
  if (!amountOfMS || amountOfMS <= 0) throw new Error("Time was 0ms or less than 0ms.");
  msg.channel.fetchMessage(messageID).then(function(m) {
    m.reactions.filter(reaction => reaction.emoji.name == ":tada:").map(function(r) {
      if (r.size < amountOfWinners) throw new Error("Not enough users entered the giveaway to return that amount of winners.");
      setTimeout(() => {return r.users.random(amountOfWinners)}, ms(amountOfTime));
    });
  });  
}

msg.channel.send("Please react with the :tada: emoji to enter the giveaway!").then(function(message) {
  returnReactionUsers(message.id, 1, "2h");
});

/*
This function is essentialy the giveaway bot you see everyway in a function.
Obviously this function would break if the bot would restart, but obviously you can store times in a database to check.
It returns mention(s) of users who reacted with the :tada: emoji.
*/
