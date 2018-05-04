function fetchMember(userResolveable) {
  return new Promise(function(resolve, reject) {
    if (!userResolveable) reject("No user resolveable was provided.");
    const fetchedMember = msg.guild.fetchMember(userResolveable);
    if (fetchedMember) resolve(fetchedMember);
    else reject("That user was unable to be fetched from the guild.");
  });
}

//Example of correct usage:
const mentionedUser = msg.mentions.users.first();
if (!mentionedUser) return msg.reply("No mentioned user!");
fetchMember(mentionedUser).then(m => m.ban()).catch(error => console.error(error));

/*
You could possibly place this function in a module and append that module to your client variable as a means of easy access to fetch a user.
Understand that you have to append the module to where your client is declared.
You append modules to the client variable as such:
require("./myFunctions.js)(yourClientVariable);
Then you can simply call the fetch member as such anyway that calls the client variable.
yourClientVariable.fetchMember(userResolveable).then(m => m.ban()).catch(error => console.error(error));
*/
