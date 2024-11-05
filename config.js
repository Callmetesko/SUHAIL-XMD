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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "null";
global.gurl  =process.env.GURL  || "null";
global.website=process.env.GURL || "null" ; 
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
global.userImages= process.env.USER_IMAGES || "null" ; // 'unavailable' | "image" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_58_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMyxcbiAgICAgICAgODQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3LFxuICAgICAgICA1OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDAsXG4gICAgICAgIDU3LFxuICAgICAgICA0MixcbiAgICAgICAgMTgsXG4gICAgICAgIDEzLFxuICAgICAgICA5NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTcsXG4gICAgICAgIDExLFxuICAgICAgICA3MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5LFxuICAgICAgICA5NSxcbiAgICAgICAgMixcbiAgICAgICAgMTkxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNixcbiAgICAgICAgMjMsXG4gICAgICAgIDMzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU2LFxuICAgICAgICA4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM5LFxuICAgICAgICA5OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY4LFxuICAgICAgICA1NixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODksXG4gICAgICAgIDExNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwLFxuICAgICAgICAyNixcbiAgICAgICAgMTEwLFxuICAgICAgICA2NixcbiAgICAgICAgMTA4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICA1NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgODYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg2LFxuICAgICAgICA2NixcbiAgICAgICAgMTUyLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6UXpJUmlCaC9ac3dvNzA1L2JhbzVXL2lLbVNkL3o1SU0xOEQwRjdSSDFrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMjg5MzAzMjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVDODM1MzdEN0YxODU0QjNCNEJEODc0MjlFOTEwMDdCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDgzNjY3OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5THUtZGtvblJBS0dUQm1neGxMcHVRXCIsXG4gIFwicGhvbmVJZFwiOiBcImJjOGNjNDQ3LWE3OGItNDk1ZC05NjA4LTNhMTRjMzc2MmZkOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTUsXG4gICAgICAyOSxcbiAgICAgIDE5NSxcbiAgICAgIDE4OSxcbiAgICAgIDI0NixcbiAgICAgIDU5LFxuICAgICAgNTgsXG4gICAgICAyMzgsXG4gICAgICAyNTQsXG4gICAgICAxNTYsXG4gICAgICAzNixcbiAgICAgIDY2LFxuICAgICAgMTk3LFxuICAgICAgMCxcbiAgICAgIDE4NyxcbiAgICAgIDEyMSxcbiAgICAgIDExNCxcbiAgICAgIDU5LFxuICAgICAgMjA2LFxuICAgICAgMTg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNixcbiAgICAgIDIxMyxcbiAgICAgIDEwOSxcbiAgICAgIDExMyxcbiAgICAgIDI0NSxcbiAgICAgIDE3MixcbiAgICAgIDE0MSxcbiAgICAgIDExNSxcbiAgICAgIDI1NSxcbiAgICAgIDg0LFxuICAgICAgMTUyLFxuICAgICAgNzAsXG4gICAgICA4MixcbiAgICAgIDE0OCxcbiAgICAgIDIyLFxuICAgICAgMjIsXG4gICAgICAyMzYsXG4gICAgICAxMzMsXG4gICAgICA5OCxcbiAgICAgIDE1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDVFJHUDFMNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyODkzMDMyODoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIklOVEVSTkVUX0dVUlVcIixcbiAgICBcImxpZFwiOiBcIjE2NDA1OTY2NDEyNjA2MjoxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMMnQrcGNFRUwzeHFia0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjV0blh6aDFvMlZ5N2ZIWjl5ejdDaWRjSzFEcWtkUEFQTjB3OXh2VUlnMVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRHRKK1pIZkR3MTdmN1BrUDlUL29VQUl0V0FqelJ6RUZCcm1LV0YxdDJPRmtVY3FMdld0OW9xZ0taazNoZjNyZlUrdmVsWkEwWHZpS0kyc3BCZllNQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaGxBL096Q0Y0dVM2S0Y0NjJLU1lWdWVTZ1kvamU0Si9PYmdmdFRHSlVIUzhXL3g2c2ZXUjJMQUhmOVJRcWZHMFFBSXh1Ym9SK0xLaFMvS0NRdWt0RGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEyODkzMDMyODoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDgzNjY3NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJidVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmJ1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiOFk3NGpLdlUyek53NWxvSUtLS1I3NkhESUxKeWR2dmV3dytUV2dvM1VKUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTIzOTgwOTg4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
