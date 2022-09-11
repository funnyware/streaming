const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send('<meta http-equiv="refresh" content="0; URL=https://lol.funnyware006.repl.co"/>')
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Server is ready.")
  })
}

module.exports = keepAlive

// use freshping.io for faster pinging and guaranteed uptime,
// you can also use uptimerobot and freshping for wacky stuff
// this is require for a constant status
