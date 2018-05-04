function filterEmojisByAnimation() {
  return new Promise(function(resolve, reject) {
    let filteredEmojis = msg.guild.emojis.filter(e => e.animated == true);
    if (filteredEmojis.size != 0) resolve(filteredEmojis);
    else reject("There are no animated emojis in this server!");
  });
};

//Example:
filterEmojisByAnimation().then(emojis => {
  msg.channel.send(`Animated Emojis include: ${emojis.map(e => e.name).join("\n")}`);
}).catch(error => console.error(error));

/*
This function literally returns a collection of emojis that are specifically animated.
This function is intended simply for the fact of cool emojis.
*/

//Returns: Promise<Collection[Emojis]>
