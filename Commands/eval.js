module.exports = class Eval {
  constructor(client) {
    this.client = client;
    this.name = "eval";
    this.info = "Evals arbitrary JavaScript code.";
    this.args = "";
  }

  async run(message, args) {
    try {
      message.channel.sendEmbed({
      color: 0x32CD32,
      description: `\`OUTPUT\`\n\`\`\`js\n${eval(args)}\n\`\`\``
    })
  } catch(e) {
    message.channel.sendEmbed({
    color: 0x8B0000,
    description: `\`ERROR\`\n\`\`\`js\n${e}\n\`\`\``
  })
}
}
}
