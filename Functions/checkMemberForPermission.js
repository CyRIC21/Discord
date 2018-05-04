function checkMemberForPermission(permissionResolveable, userResolveable) {
  return new Promise(function(resolve, reject) {
    msg.guild.fetchMember(userResolveable).then(member => {
      let resultBoolean = false;
      if (member.permissions.has(permissionResolveable)) {
        resultBoolean = true;
        resolve({result: resultBoolean});
      } else reject("An error has occured, couldn't find that user!");
    });
  });
}

//Example:
checkMemberForPermission("MANAGE_LINKS").then(promise => {
  msg.channel.send(`The result for that user and that permission was ${promise.result}`);
}).catch(error => console.error(error));

/*
This function simply returns a boolean in a promise of whether or not a user has a permission or not.
*/

//Returns: Promise<Boolean>
