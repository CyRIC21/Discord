function fetchRoleMembers(roleName) {
    return new Promise(function(resolve, reject) {
      const roleString = roleName.toString();
      const fetchedRole = msg.guild.roles.find("name", roleString);
      const restructuredObject = {
        memberCollection: fetchedRole.members,
        memberAmount: fetchedRole.members.size,
      };
      if (fetchedRole && fetchedRole.members.size !== 0) resolve(restructuredObject);
      else reject("I couldn't find that role or no members were assigned to it!");
    });
  }
  
  //Example:
  fetchRoleMembers("VIP").then(role => {
    msg.channel.send(`The VIP role has \`${role.memberAmount}\` in it!`);
    msg.channel.send(`The VIP role members are \`${role.memberCollection.map(m => m.displayName).join("\n")}\``);
  }).catch(error => console.error(error));
  
  /*
  All this function does is simply returns the amount of members in that role, or just the raw collection.
  It has all the neccesary checks in place to make sure that you do not error during your function.
  */
  
