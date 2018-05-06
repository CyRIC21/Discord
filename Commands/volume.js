exports.run = function(bot, msg, args) {
  const voiceChannel = msg.member.voiceChannel ? msg.member.voiceChannel : (msg.guild.voiceConnection ? msg.guild.voiceConnection.channel : null);
  if (!voiceChannel || (!msg.member.voiceChannel && msg.author.permLevel < 2)) {
      return bot.embed(msg, bot.hex, "Invalid command exception:", "You need to be in a voice channel to set the volume.");
  }
  const volume = args.join(" ");
  if (!volume) return bot.embed(msg, bot.hex, "Fetched current volume:", `Current volume for this guild is: ${bot.playlists.get(msg.guild.id).dispatcher.volume * 100}%`);
  if (volume < 0 || volume > 100) return bot.embed(msg, bot.hex, "Invalid volume value:", "Volume must be a value between 0 and 100.");
  bot.embed(msg, bot.hex, "Setting volume:", `Setting guild volume to ${volume}%`).then(() => {
    msg.guild.voiceConnection.volume = volume / 100;
    bot.playlists.get(msg.guild.id).dispatcher.setVolume(volume / 100);
  });
};

exports.conf = {
  activated: true,
  aliases: ["v"],
  permLevel: 2
};
  
exports.help = {
  name: 'volume',
  description: 'Sets the streams current volume.',
  usage: 'volume <between 0 - 100>'
};