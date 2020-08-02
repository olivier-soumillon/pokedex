import trainers from '../../data/trainers'

const friends = ({ friends }) => {
    return trainers.filter((trainer) => friends.includes(trainer.id))
}

export default friends