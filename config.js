global.owner = ['6281232843422'] 
global.mods = [] 
global.prems = [] 
global.APIs = { 

  nrtm: '',
  xteam: ''
}
global.APIKeys = { 

  'https://adrianyan.me': 'd90a9e986e18778b'
}

// Sticker WM
global.packname = 'Bot Whatsapp'
global.author = 'RFBot'

global.multiplier = 69 

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
