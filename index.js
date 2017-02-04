const Discord = require('discord.js')
const events  = require('./Modules/Events.js')

const client = new class Client extends Discord.Client {
  constructor() {
    super({ fetchAllMembers: true });
    this.events = new events(this);
    this.commands = new Map();


    // Event Handling
    this.on('ready', () => { this.events.ready(); })
    this.on('message', message => { this.events.message(message); })

    // Login
    this.login(require(`./config.json`).token);
  }


}

process.on('unhandledRejection', err => console.error(`Uncaught Promise Rejection\n${err}`))
