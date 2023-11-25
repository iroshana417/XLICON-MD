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
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1BuWXkrek91Qkg0MEJWQ3N1VGsvQS8wTTZoc0dtcEozeG1kVGJHRlJXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGNncGx2cXdwYTVvUmRGSkhoNm5kdzdrT3Q2NzVLZEJ6OFViNDl1YkVrcz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTi9yWmlGNWloeG13bGhNRVhEbHp0UDVaUXAxM1lLcEJGN3ArVVh2Zms0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCRm1zaWt6M1JvenUwWHVzZzltUFo2Vko0LzRXRTVsRGg0M05SUytMTGtNPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklNTk9ibFUvblJCZVRYOE4ybUNycHJwTENDWWFBMmxDQlJTT1NJbTRObEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdNNGw4bkFIU3NUYVBjYyt5eUk3dVp0VExOUUVtOFJPTjVVWUlMK2dtMFk9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWcTFueHAwT3JtNFZhUGNBVlJmVXR1TllDb0Zlbk1xVmhxb2hFV1VHZlBOY2NnQ05uNkZueUN1aXdIMHpkUjcwS0hrM2R1SlNQQ3d6bzREbkQ3MDFBQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIxOCwiYWR2U2VjcmV0S2V5IjoiQWFWUTRWNXNnc0dMS3Jid003RWNuRzZoY3NmWXE3eHZlWHdXOE1wd1BPVT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWUJ3SzIxcHFRbldSajZlZlV1aW5EUSIsInBob25lSWQiOiIxMTBmZGE1Yi03MGE5LTQ4NWItYmVkOS0zMmU5MjVhZTc5NmIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXovM2tvb2xCcitRcmdwMnVETDRFVy9oNWtBPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZVllFaXpUTG9odE1aQnFDUFlaaUdETC96VHc9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNQVGZxVGdRbDZ5R3F3WVlBZz09IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imx4UDdkWG1uRURpRVQ0YnF6ZE93VGNvN0R5TytzYmxGNTFBY2t0cGlwazQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImlnODJxaFZ2eXRMY25tMUNBMlU4dDdjWjVjS2xEdjRUTmIvRXhvQXhKWnNoMFZUemVPUGVqQlJIUVNLRzRpbFFmWDNVS2RxWHdtdG5GdzFVenZNd0J3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ4T3Y5MFNPVEtiUHE0dmZxaWNIakJvSVRrekVYakgzOGpTVlRnS3J0Y0JYUUl6L0p3M0xlQS9ndzcva214aExuTHkwS2haaFpJRXRZZGVONFE0T1RCUT09In0sIm1lIjp7ImlkIjoiOTQ3NjM4NzYzNDU6NEBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2Mzg3NjM0NTo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpjVCszVjVweEE0aEUrRzZzM1RzRTNLT3c4anZyRzVSZWRRSEpMYVlxWk8ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDA4OTQyMzR9",  //PUT Session Id Here, 
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
