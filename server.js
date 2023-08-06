const dotenv = require('dotenv')
dotenv.config({ path: `.env` })

const app = require('./app')
const http = require("http");

const port = process.env.PORT || 3500

app.set('port', port)

const server = http.createServer(app)

server.on('listening', () => {
  console.log("✓", `Listening on Port ${port}`);
})

server.listen(port)