function fetchRoles(userResolveableOrID) {
  return new Promise(function(resolve, reject) {
    const collection = msg.guild.fetchMember(userResolveableOrID).then(member => {
      if (member) resolve(member.roles);
      else reject("That user couldn't be found in the guild.");
    });
  });
}

//Example:
const mentionedUser = msg.mentions.users.first();
if (!mentionedUser) return msg.reply("No mentioned user!");
fetchRoles(mentionedUser).then(r => {
  msg.channel.send(`They have these roles: \`\`\`${r.map(roles => roles.name).join("\n")}\`\`\``);
});

/*
This function will return a collection of roles from a specified member, so instead of having to manually get your member, then his roles.
You can simply just call this function, and handle the collection of roles as you please.
*/
