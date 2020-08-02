import trainers from '../../data/trainers'

const trainer = (_, args) => {
    return trainers.find((trainer) => trainer.id === args.id)
}

export default trainer