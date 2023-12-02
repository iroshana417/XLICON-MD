const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94763876345"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94763876345' 
global.devs = '94763876345';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK05XNWRWbnV6Vml3VnVvaVFCUFo4UTN1REErUVlGQzIwTnArOEl0OFdIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWEVVeHhuNVVsejhmNStUZHVyWUUreUo3Zm0yOEsweGJraWpiZVY3VDJRTT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQnlIMklCeDFHODVNWGV4ZHF5WXZzTHZ3WEE3OExUUmJ3R1dybU1PeTFzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNMkg2YlF1Y2I2RjZLVjVrR29KWDB0MXNtWEtCNUEyQ3ptQU5tM1VuY1hVPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtHc1djNFh4VmRkaDQxc1JzZmdPc3ZkZWpnWXNPL0JtY2ZHbWRrT2JjbWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZtTXVQRDZtTlJtMlVWR1VnYVloTk9yYkdnWmVMNnlINE9IbFZSMXFUMTA9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrOVJmc2ZRb0I1R3FieEFZVGRzUENkdEo1R2tXYWFmWXBKMG1KVkFCL25BNXZRbXVlRTNLVWwzVkFxNlhFbDJXQnRYR0JoOG8ySDc5OTRYZTMvWDdoZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjUzLCJhZHZTZWNyZXRLZXkiOiJJZ0UvWUZBMElXME1OSjAzTnZ0QU9PN3FZMUVFVXVGd1BPNTFPWDkxbXI0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJNldFY1JxbVFpbTdQdm54N2ZIMHhRIiwicGhvbmVJZCI6IjRkZGY0MTA3LTdiZWQtNDU5MC05MjNjLTliOWVlMTUwMjRiZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3UWlrQnZMWUwwL25QOElHbXVYT0pHZlBUM009In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImsvenoxWnd3dFYxLzRLUmlRZnExZ1BzNVVOND0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09qM2lNd0VFTmpacktzR0dBRT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoiakt2ZE80WVJJQUdBdUViQU81OGxpcGtCZXpzdEN4dFlUVjFTWGlYbkdYMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoicWRVelU3VzJxeU0vbjBtKzdRV0Vmc1FleTFhYVBCb1BISEdWYlQyR2lhamhJL0hLOFgzQ2ZoME9BUnpxbHh6dWY5bHZ1Zjdaa2xndTZWSllrVXZyRHc9PSIsImRldmljZVNpZ25hdHVyZSI6Ilg2NEZRejAvcDkzM3pKYzN3c1hiVFBuODgvL21mY0NkQUpOMU9LV25nOHhFZ2ZQLy9xV1JQZ2tpdVE5eGd4Qml4aHVESk1tTk5PNkF5d1IvVXNVV2dBPT0ifSwibWUiOnsiaWQiOiI5NDc0MjgyOTIwNDoxQHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzQyODI5MjA0OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWXlyM1R1R0VTQUJnTGhHd0R1ZkpZcVpBWHM3TFFzYldFMWRVbDRsNXhsOSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMTUyMjY1MX0=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'disnaka manohara',
  packname:  process.env.PACK_NAME || 'disnaka',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'me create  is ip bro ' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'alvin now ' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
