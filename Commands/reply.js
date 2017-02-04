module.exports = class Reply {
    constructor(client) {
        this.client = client;
        this.name = "reply";
        this.info = "Use fetchMessage to reply to a message.";
        this.args = "";
    }

    async run(message, args) {
        var arg = message.content.split(" ")
        arg = arg.slice(2).join(' ')
        let id = args[0];
        //console.log(id)
        message.channel.fetchMessages({
            around: id
        }).then(messages => {
                let msgFilter = messages.filter(e => e.id == id).first();
                message.delete();
                message.channel.sendMessage(arg).then(() => {
                  message.channel.sendEmbed({
                      description: `${msgFilter.content}`,
                      author: {
                          name: `${msgFilter.author.username}#${msgFilter.author.discriminator}`,
                          icon_url: `${msgFilter.author.avatarURL}`,
                          url: `https://github.com/jaacks/selfcord`
                      },
                      footer: {icon_url: `../logo.png`, text: `Message sent at ${msgFilter.createdAt.toUTCString()} | Powered by SelfCord`}
                  })
                })



                    //message.channel.sendMessage(`Got message by ${msgFilter.author.username} at ${msgFilter.createdAt} that starts with ​${msgFilter.content}`);
                })
        }
      }
