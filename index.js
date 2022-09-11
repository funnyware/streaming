const keepAlive = require("/home/runner/lol/server")
let discord = require('discord.js-selfbot-v11')
let rpcGenerator = require("discordrpcgenerator")
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
var uuid = ()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,a=>(a^Math.random()*16>>a/4).toString(16))
let client = new discord.Client()

keepAlive()
client.login(TOKEN)
 
client.on("ready", () => {
    rpcGenerator.getRpcImage("1015379222811922523", "failarmy")
    .then(image => {
        let presence = new rpcGenerator.Rpc()
        .setName("ROFL")
        .setUrl("https://www.twitch.tv/kys")
        .setType("STREAMING")
        .setApplicationId("1015379222811922523")
        .setAssetsLargeImage(image.id)
        .setAssetsLargeText("https://discord.gg/GJTHwNEjPs")
        .setDetails("JOIN #FAILARMY")
 
        client.user.setPresence(presence.toDiscord())
    }).catch(console.error)
  console.log(`${client.user.username} Successfully Logged in!`)
})

// create a "Secret" (environmental/env variable)
// set key name to TOKEN, set value to your discord token
// save that env variable

// to create the rpc, login to https://discord.com/developers/
// create an application and copy the "Application ID"
// replace all instances of "client-id" with the copied ID

// to add an image to the rpc, stay on https://discord.com/developers/
// go to the "Rich Presence" tab inside your application
// add any image of your liking, and name it something preferably simple
// don't forget to save the image you uploaded
// replace "img-name" with the name of the image


// !!! FOR THE STATUS TO WORK PROPERLY, THE URL MUST BE A TWITCH LINK !!!
