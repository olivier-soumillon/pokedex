import { graphqlHTTP } from 'express-graphql'
import schema from './schema'

export default (app) => {
    const options = {
        schema,
        graphiql: true
    }

    app.use('/graphql', graphqlHTTP(options))
}

