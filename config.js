const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="adebisiadedamola567@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Internetguru:@Tesko1234@cluster0.zea94.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://Internetguru:@Tesko1234@cluster0.zea94.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "WEST AFRICAN TIME";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "©Tesko" 


global.devs = "2348148798299" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348148798299";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_21_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA4MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE2LFxuICAgICAgICA2NixcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDczLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDY1LFxuICAgICAgICAyNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIsXG4gICAgICAgIDgyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA2NixcbiAgICAgICAgMjUzLFxuICAgICAgICA0MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjU1LFxuICAgICAgICA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NixcbiAgICAgICAgMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQyLFxuICAgICAgICAzMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQsXG4gICAgICAgIDMsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDg4LFxuICAgICAgICAzMyxcbiAgICAgICAgODcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA4OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgODgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiT1c1VUR6WHBEcTBaNk9MQlhra2lzNTNiYVUyYVYvYS9EL3phU1NtUU9raz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDc1NjMwMTUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDMjAxNzQ4M0I0MTFCOUQ2MDdDQTFFNDFBQzFDREYwRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA3OTQ4ODlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDc1NjMwMTUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFMTc2RkM3NEU2QkRGMEFFMkQ5Q0EwMzk0NEYyODA5MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA3OTQ4ODlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDc1NjMwMTUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwNUI0ODRCMjQ0NzI4Qzg5QkJGNzFGOEYzNDEwRUJCQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA3OTQ4OTBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDc1NjMwMTUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyNkU0ODQyOTBCODFERkJGMUY3RjU4NjUwMkQzMUZFOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA3OTQ4OTBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwic01NUlVjdDVTS1NUd1VMajBRNkpWQVwiLFxuICBcInBob25lSWRcIjogXCI1NzEwMTg2YS1kODRjLTQ2ZmQtYWVjNC0yZWRlM2I5ODMwZDdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA3LFxuICAgICAgMjMwLFxuICAgICAgMTg0LFxuICAgICAgMjEwLFxuICAgICAgNjYsXG4gICAgICAxMjQsXG4gICAgICAyNyxcbiAgICAgIDE1NSxcbiAgICAgIDI1MyxcbiAgICAgIDIwMSxcbiAgICAgIDE5MCxcbiAgICAgIDEyMSxcbiAgICAgIDExLFxuICAgICAgMTIxLFxuICAgICAgNTUsXG4gICAgICAxMDMsXG4gICAgICAyMjcsXG4gICAgICAyMzIsXG4gICAgICAxMzIsXG4gICAgICA4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODQsXG4gICAgICAxNDIsXG4gICAgICAxMjAsXG4gICAgICAxMzQsXG4gICAgICAyNDYsXG4gICAgICA2MyxcbiAgICAgIDI0OSxcbiAgICAgIDIwMSxcbiAgICAgIDE4MSxcbiAgICAgIDk1LFxuICAgICAgNzIsXG4gICAgICAyNDYsXG4gICAgICA1MCxcbiAgICAgIDU2LFxuICAgICAgMjQ4LFxuICAgICAgMTAxLFxuICAgICAgMjgsXG4gICAgICAxMDMsXG4gICAgICAxNjIsXG4gICAgICAyMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWk03OVY4QkRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNzU2MzAxNTA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzY5NTg3NDcyODM2MzY6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJDZW50cm9cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNV3kwTDhFRUlTcnA3a0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjRJamptMFdJdkIyQW90NEJoYnBhbG5xUUlwNFdzTlNlYldtdERRNkl5bUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYTZGVlNVMzQ3WUp0MjNNQXJHZ2Yza2cvejhoTWM3TVhVaTdCbmpBdmMwdEo4VW5PNzRFbmZJM043RFc0eTZLMmtKYkw5bGpwOFBCM1d6eThJN01JQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTEs5L0YzNW5GeFB0UThoUGpGTjB1czhGYnpoanBkSlFCeVRNNFJoNW9aWDhod04waXJLS2ZERjVVam5zSTcwOWs1bVB5MTMyUmFJV3NMbXlCVEE4amc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA3NTYzMDE1MDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA3OTQ4ODgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCR2JcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJHYi5qc29uIjogIntcImtleURhdGFcIjpcIlRoZVNvZytoZnpCdWJpUlN4QVJzb2ROc0dqZGk2eVhMT3crRWh1d1pucjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIwNzE3OTU4OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwNzk0ODg4ODI5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "TESKO",
  packname: process.env.PACK_NAME || "@",
  botname : process.env.BOT_NAME  || "TESKO",
  ownername:process.env.OWNER_NAME|| "TESKO",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "TESKO"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
