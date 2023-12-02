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
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0M1WVpiUk9iY1I1dmlKYVo3S2ZDdUtwdGdPWDF1RWw3RHBiQjlZRHpFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVgvNitXSStERlZOVEwrdWJPZjNHcm45dWJWSkZOU1ZlWnZBeHRoZExtbz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQ3oveTZqVCtOZHRxVFh2eTBscmoxSjRnVUt4MkQyd09ZMllOSWdESmxJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxN0lzWk91Q1ZWaXg3eHFuTTc5czlzajZCM0c0NUMyelBRSFFmZDdWbG5BPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklKT2pXOUl2Y1RhQjlrNWJYaHFrdzBUUjc5dStOSmsxTGliM3R0bkQzMnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdqQnRxS2o2cERiQnpnRWF0SG43N2ZuUlduZzRvN2NRckk4eDRxSSt0UUE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1VGRxeHcrdG8yRFhXaHBwTzc4RHJheWs4NFJQa1Nod0R0MllZNEYyc3Z6TkMydFY4MURoMFM2TVQ0RFNBMHF5OFNvSHZnT3lnd3pGK1AxUVcwcXJBZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjI0NiwiYWR2U2VjcmV0S2V5IjoiR2Y5bzNyRHdYRjNDK3FkcDdlSmJOY2h3U00wWHo0cXBYK3VOV1YyWTJCND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoibHl3ZjJDY3ZUbkNtZnk0Zl8wb2ZoUSIsInBob25lSWQiOiI3MDYxYWU0Mi01ZDMzLTQ0ZGEtYTEwZC1iZWU4ZjUxYzQ1YTEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaCtmeWxsVzlrSVRPbGJRalFHeDBKQ0NlMG04PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJalcrTXc3T01KYTRXUVRra0xNdHlFakx5b0k9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNPZjNpTXdFRVB1UHJLc0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImpLdmRPNFlSSUFHQXVFYkFPNThsaXBrQmV6c3RDeHRZVFYxU1hpWG5HWDA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlNLTlY4a1lOTDFSeFdITFZWVmJGN1FHbFRCY2grMmhLMjQvR0pSdGZNWG52Q0EvS1ROVUloZ2lKTnRMY1lxdiswN3NtYTlxcjdzUFR3TjdrV2JCT0JnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkKzVSdk5Eak9kcmE5VTY3RGloeEZOTlM1U2VzVnprR0F5b0VISFRRUHd3WS9nalRQbW9MK1ZDdngrU01nbm1PZXcrTUtLTVhveTlVL0MyM1ZXOTdCdz09In0sIm1lIjp7ImlkIjoiOTQ3MTE0NTkwODk6MjhAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTE0NTkwODk6MjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWXlyM1R1R0VTQUJnTGhHd0R1ZkpZcVpBWHM3TFFzYldFMWRVbDRsNXhsOSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwMTUxMzIxNX0=",  //PUT Session Id Here, 
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
