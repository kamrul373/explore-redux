const { createStore } = require("redux")

// constants of type
const Increment = "INCREMENT"
const Decrement = "DECREMENT"
const Reset = "RESET"

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
const resetCount = () => {
    return {
        type : Reset
    }
}
const counterReducer = (state=InitialState,action) => {
    switch (action.type) {
        case Increment : return  {
            ...state ,
            counter : state.counter + 1
        }
        case Decrement : return {
            ...state,
            counter : state.counter - 1
        }
        case Reset : return {
            ...state,
            counter: 0
        }
        default : {
            return state
        }
    }
}
// store 
const store = createStore(counterReducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(IncreaseCount() )
store.dispatch(IncreaseCount() )
store.dispatch(IncreaseCount() )
store.dispatch(IncreaseCount() )
store.dispatch(DecrementCount() )
store.dispatch(DecrementCount() )
store.dispatch(IncreaseCount() )
store.dispatch(resetCount() )

