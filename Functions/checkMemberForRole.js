function checkMemberForRole(roleName, userResolveable) {
    return new Promise(function(resolve, reject) {
      msg.guild.fetchMember(userResolveable).then(member => {
        let resultBoolean = false;
        const role = msg.guild.roles.find("name", roleName.toString())
        if (role && member.roles.has(role.id)) {
          resultBoolean = true;
          resolve({result: resultBoolean});
        } else reject("An error has occured, couldn't find that user!");
      });
    });
  }
  
  //Example:
  checkMemberForRole("VIP").then(promise => {
    msg.channel.send(`The result for that user and that role was ${promise.result}`);
  }).catch(error => console.error(error));
  
  /*
  This function simply returns a boolean in a promise of whether or not a user has a role or not.
  */
  
  //Returns: Promise<Boolean>
