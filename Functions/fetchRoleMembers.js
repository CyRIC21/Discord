function fetchRoleMembers(roleName) {
  return new Promise(function(resolve, reject) {
    const roleString = roleName.toString();
    const fetchedRole = msg.guild.roles.find("name", roleString);
    if (fetchedRole && fetchedRole.members.size !== 0) resolve(fetchedRole.members);
    else reject("I couldn't find that role or no members were assigned to it!");
  });
}

//Example:
fetchRoleMembers("VIP").then(members => {
    msg.channel.send(`The VIP role has \`${members.size}\` in it!`);
}).catch(error => console.error(error));

/*
All this function does is simply returns the promise of a collection from your desired role.
It has all the neccesary checks in place to make sure that you do not error during your function.
*/
