import { createStore } from 'redux'

const initialValue = {
    counter: 0,
}

const reducerFunc = (state = initialValue, action) => {
    if (action.type === 'increment')
        return { counter: state.counter + 1 }

    if (action.type === "decrement")
        return { counter: state.counter - 1 }

    return {counter:state.counter}
}

const store = createStore(reducerFunc)

export default store;