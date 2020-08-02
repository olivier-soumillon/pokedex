import pokemon from './pokemon'
import trainer from './trainer'
import allTrainers from './allTrainers'
import allPokemons from './allPokemons'
import friends from './friends'
import team from './team'

export default {
    Query: {
        pokemon,
        trainer,
        allTrainers,
        allPokemons
    },
    Trainer: {
        friends,
        team
    }
}