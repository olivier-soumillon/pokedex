import pokemons from '../../data/pokemons'

const pokemon = (_, { id }) => {
    return pokemons.find((pokemon) => pokemon.id === id)
}

export default pokemon