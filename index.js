const { Client } = require('discord.js')
require('./src/handler/load')(new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] }))