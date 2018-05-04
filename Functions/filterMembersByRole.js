function filterMembersByRole(roleName) {
  return new Promise(function(resolve, reject) {
    const roleString = roleName.toString();
    const fetchedRole = msg.guild.roles.find("name", roleString);
    const filteredCollection = msg.guild.members.filter(m => m.roles.has(fetchedRole.id));
    const customObject = {
        memberCollection: filteredCollection,
        memberAmount: filteredCollection.size,
        specifiedRole: fetchedRole.name
    }
    if (fetchedRole && customObject.memberAmount != 0) resolve(customObject);
    else reject("I couldn't find that role or no members were assigned to it!");
  });
}

//Example:
filterMembersByRole("VIP").then(role => {
    msg.channel.send(`These guild members have this role: \`${role.memberCollection.map(m => m.displayName).join("\n")}\``);
    msg.channel.send(`The ${role.specifiedRole} has ${role.memberAmount} members assigned to it!`);
});

/*
This function returns a collection of members that are assigned specifically to that role.
It also returns the amount of members assigned to that role and also the role that you searched for.
It has all the neccesary checks in place to make sure that you do not error during your function.
*/

//Returns: Promise<memberCollection/memberAmount/specifiedRole>
