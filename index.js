// constants of type
const Increment = "INCREMENT"
const Decrement = "DECREMENT"

// intial state
const InitialState = {
    counter : 0
}
// action -> Object type , payload
const IncreaseCount = () => {
    return {
        type : Increment
    }
}
const DecrementCount = () => {
    return {
        type : Decrement
    }
}
