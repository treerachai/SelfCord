const Discord = require('discord.js')

module.exports = class Ping {
    constructor(client) {
        this.client = client;
        this.name = "info";
        this.info = "Get info on the server or a user.";
        this.args = "";
    }

    async run(message, args) {
      message.delete()
        function serverE() {
            const embed = new Discord.RichEmbed();
            embed.setAuthor(`${message.guild.name}`, `${message.guild.iconURL}`, `https://github.com/jaacks/selfcord`)
            embed.setColor(0x176790)
            embed.setDescription(`__**Guild Information**__\n\n**User Count**: ${message.guild.memberCount}\n**Server ID**: ${message.guild.id}\n**Default Channel**: ${message.guild.defaultChannel.name}\n**Server Owner**: ${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}\n**Date of Creation**: ${message.guild.createdAt.toUTCString()}\n**# of Emojis**: ${message.guild.emojis.size}\n**# of Channels**: ${message.guild.channels.size}\n**# of Roles**: ${message.guild.roles.size}\n\n__**Channel Information**__\n\n**Channel Name**: ${message.channel.name}\n**Created At**: ${message.channel.createdAt.toUTCString()}\n**ID of the Channel**: ${message.channel.id}\n**Type of Channel**: ${message.channel.type}`);
            embed.setFooter(`Powered by SelfCord`, "https://cdn.rawgit.com/jaacks/SelfCord/32263bc2/logo.png")
            message.channel.sendEmbed(embed)
        }



        function memberE(member) {
            const embed = new Discord.RichEmbed();
            embed.setAuthor(`${member.user.username}`, `${member.user.avatarURL}`, `https://github.com/jaacks/selfcord`)
            embed.setDescription(`__**Information on ${member.user.username}**__\n\n**Discriminator**: ${member.user.discriminator}\n**Presence**: ${member.user.presence.status}\n**Playing**: ${member.user.presence.game ? member.user.presence.game.name : "None."}\n**Joined Guild**: ${member.joinedAt.toUTCString()}\n**Account Creation**: ${member.user.createdAt.toUTCString()}`)
            embed.setColor(0x176790)
            embed.setFooter(`Powered by SelfCord`, "https://cdn.rawgit.com/jaacks/SelfCord/32263bc2/logo.png")
            message.channel.sendEmbed(embed)
          }

        if(args.includes('server')) return serverE();
        if(args.includes('user')) {
          let member = message.guild.member(message.mentions.users.first())
          memberE(member);
          if(!message.mentions.users.first()) {
            let member = message.guild.member(message.author)
            memberE(member);
          }
        }

    }
}
