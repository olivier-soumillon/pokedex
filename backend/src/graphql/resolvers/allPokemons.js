import intersection from 'lodash.intersection'
import pokemons from '../../data/pokemons'

const allPokemons = (_, args) => {
    if (args.types) {
        return pokemons.filter((pokemon) => intersection(pokemon.types, args.types).length > 0)
    }

    return pokemons
}

export default allPokemons