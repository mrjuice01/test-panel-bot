import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['263780699988', 'FG98', true],
  ['0987654321'], 
  ['1234567890'] 
] //Numeros de owner 

global.mods = ['263780699988'] 
global.prems = ['263780699988']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'Baby┃ᴮᴼᵀ' 
global.author = '@mrjuice' 
global.fgig = '▢ Sígueme en Instagram\nhttps://instagram.com/mr_juice7\n' 
global.dygp = 'https://chat.whatsapp.com/GRuUvhCqhHK08msKMadAji'
global.fgsc = 'https://github.com/mrjuice01/baby' 
global.fgyt = 'https://www.youtube.com/@mrjuiceofc'
global.fgpyp = 'https://paypal.me/mrjuice'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

global.wait = '*⌛ _Baby Is Prossesing..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
