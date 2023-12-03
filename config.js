const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94742829204"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'බබා 💘💘' // add your username
global.sudo = process.env.SUDO || '94742829204' 
global.devs = '94742829204';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU5Ock5LN1p5R3FhTTBpbGMyeDJmSGxGaW9DZmJleTJNWGxCUHUzRFRsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWFOQjJzUVZCVHlYK1FzbzlhOUxBWWN0K0Z0RHRNek9RamJYQ0dPZmxYQT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSlZ0WTV0RFYyNXMzVWNUM2I0cktqMjNySUdBbGF1UWIwaXQyT2hwWkdNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFcnh3MXVMeXBxbnlPL1RtSC9lWWxKcXZvYU5aeWlCVDRFNzFDSnZSMnpvPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFCNVh2YVBSWEwydlN3V1EzUE5iQzAwT09TR0xNMU1Fb3NXYzFmOWpnV2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImthZ25hcllua2ROSm9QbzQyc3BCdUpPYmJYZmw5dUxnUENOd2lkTGhOM2M9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRaUZhMjZ5V1ZjWHF1VWNNTkNPNTFDZnVUNjBtOHpieHUxNWhWZldmY3dkeDRwQXB0YVJ3eWRXYXFJZ3Uybnp6SHZJWkxzM1VsWXRmenh5aVJ3VU9EZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEwMCwiYWR2U2VjcmV0S2V5IjoiR1dqZGtKN3k1WGN2VkZTcXpaRzVwN0RUd05QK2h5dGtlLzFYUitSQ3pVRT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoidUNxdjRSblhUT09LVjhHN2tPcnZjQSIsInBob25lSWQiOiIzMTdmMzgwOS1jMzIzLTQyOTEtYWFhYy0wYjhlMmZiMmYwMTQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFrbFNzNU5kSXMzVFErSENiRk1PTWpnR2FvPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvOEJyMnpmQk9tN0ZHTjZWWmFUQlFLYXdHbk09In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNOK0Q5b2dIRU11a3Nhc0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImUzOTJLSGk0eEVrRzZyMVRGUHA2L0FwSFJJWlpka1QyT3dkTmY4MGxEeUU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkVPK2xLdGF1Nkk2YWN0bWpwY2NJWXZsZW5nSlRLZCs0WC84YzNVV212NTJ2NktIcHFOUDhDdWd1NWdUWUlSaW94TWg5UlZncmRPb1Z3L05tUkJMdkNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYK2k2SkFmd3hRMDNFUjJGNi9yeFVrTzlETVJmQStVNmFVUWRjekhVN0NINUNmK20yMUtWTVJWWW9aTGhPbE9BNWY5ekJmaXpKWm8zaWROd1RPK0JDZz09In0sIm1lIjp7ImlkIjoiOTQ3MTE0NTkwODk6MjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSXAgQnJvIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzExNDU5MDg5OjI5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlh0L2RpaDR1TVJKQnVxOVV4VDZldndLUjBTR1dYWkU5anNIVFgvTkpROGgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDE1OTc3NzZ9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'node.js',
  packname:  process.env.PACK_NAME || 'npm',
   
  botname:   process.env.BOT_NAME === undefined ? "බබා 💘💘" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'බබා💘💘 ' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
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
