import express from 'express'
import http from 'http'

const app = express()
const server = http.createServer(app)

server.listen(1337)
