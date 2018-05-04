function fetchMember(userResolveable) {
  return new Promise(function(resolve, reject) {
    if (!userResolveable) reject("No user resolveable was provided.");
    const fetchedMember = msg.guild.fetchMember(userResolveable);
    if (fetchedMember) resolve(fetchedMember);
    else reject("That user was unable to be fetched from the guild.");
  });
}
