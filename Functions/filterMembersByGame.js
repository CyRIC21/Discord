function filterMembersByGame(gameName) {
  return new Promise(function(resolve, reject) {
    const gameString = gameName.toString();
    const filteredMembers = msg.guild.members.filter(m => m.presence.game.name == gameString);
    const customObject = {
        memberCollection: filteredMembers,
        memberAmount: filteredMembers.size,
        specifiedGame: gameString
    }
    if (filteredMembers.size != 0) resolve(filteredMembers);
    else reject("Unable to return collection of members, as collection was empty for this game.");
  });
}

//Example:
filterMembersByGame("Fortnite").then(filter => {
    msg.channel.send(`You have ${filter.memberAmount} playing \`${filter.specifiedGame}\``);
    msg.channel.send(`These members are playing: \`${filter.specifiedGame}\`: ${filter.memberCollection.map(m => m.displayName).join("\n")}`);
}).catch(error => console.error(error));

/*
This function simply returns a promise of a collection of members, an amount or the specified game for convience.
This function is super useful if you want to get all the members playing a specific game.
*/

//Returns: Promise<memberCollection/memberAmount/specifiedGame>
