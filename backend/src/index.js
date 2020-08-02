import express from 'express'
import http from 'http'
import routes from './routes'

const app = express()
const server = http.createServer(app)

routes(app)

server.listen(1337)
