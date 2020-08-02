const typeDefs = `
    type Query {
        trainer(id: ID!): Trainer,
        pokemon(id: ID!): Pokemon,
        allTrainers: [Trainer!],
        allPokemons(types: [String]): [Pokemon!]
    }

    type Trainer {
        id: ID!,
        fullName: String!,
        team: [Pokemon!],
        friends: [Trainer!]
    }

    type Pokemon {
        id: ID!,
        name: String!,
        types: [String!]
    }
`

export default typeDefs