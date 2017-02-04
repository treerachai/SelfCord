const fs = require('fs');
const config = require('../config.json')

module.exports = class Events {
        constructor(client) {
            this.client = client;
        }

        ready() {
            console.log('Ready!');
            const commands = fs.readdirSync(`./Commands/`);
            for (const command in commands) {
                const mod = new(require(`../Commands/${commands[command]}`))(this.client);
                this.client.commands.set(mod.name, require(`../Commands/${commands[command]}`))
            }
        }

        async message(message) {
            if (message.author.id !== config.userID) return;
                if (message.content.startsWith(config.prefix)) {
                    let command = message.content.substr(config.prefix.length).split(" ")[0];
                    let args = message.content.substr(config.prefix.length + command.length + 1).split(' ')

                    if (this.client.commands.get(command)) {
                        try {
                            await new(this.client.commands.get(command))(this.client).run(message, args);
                        } catch (e) {
                            console.error(e);
                        }
                    }
                }
        }
      }
