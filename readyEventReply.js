db.guilds.get(row[i].guildID).channels.get(logs.id).send("", {embed: {
  author: {name: db.user.tag, icon_url: db.user.avatarURL},
  color: 0xff0000,
  title: "Successfully unmuted user!",
  description: `Successfully unmuted: ${row[i].username} : [${row[i].userID}] \nStaff: ${row[i].staffMember} \nReason: ${row[i].reason} \nUnmute date: ${}`,
  timestamp: new Date(),
  footer: {text: "Command executed!"}
}});
