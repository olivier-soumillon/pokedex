import express from 'express'
import http from 'http'
import routes from './routes'
import graphql from './graphql'

const app = express()
const server = http.createServer(app)

routes(app)
graphql(app)

server.listen(1337)
