const ms = require("ms"); //Used to convert milliseconds to readable time.

function commandCooldown(userResolveable, amountOfMilliseconds) {
  if (!userResolveable || !amountOfMilliseconds) return
  const amountOfTime = amountOfMilliseconds;
  const readableTime = ms(ms(amountOfTime), {long: true});
  const cooldown = new Set();
  if (cooldown.has(msg.author.id)) 
    return msg.reply(`This command has a cooldown of ${readableTime}, please wait.`);
  cooldown.add(msg.author.id);
  
  setTimeout(function() {
    cooldown.delete(msg.author.id); 
  }, amountOfTime);
}

/*
This function basically uses the set object to store and remove users ID for a command cooldown.
The set object just allows us to store unique values of any type.
The timeout clears the author ID from the cooldown after your specified amount of time.
*/
