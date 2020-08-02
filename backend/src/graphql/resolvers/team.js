import pokemons from '../../data/pokemons'

const team = ({ team }) => {
    return pokemons.filter((pokemon) => team.includes(pokemon.id))
}

export default team