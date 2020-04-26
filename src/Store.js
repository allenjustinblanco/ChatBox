import React from 'react';

export const CTX = React.createContext();

const initState = {
    general: [
        {from: 'justin', msg: 'hello'},
        {from: 'john', msg: 'hello'},
        {from: 'amelia', msg: 'hello'},
    ],
    topic1: [
        {from: 'david', msg: 'hello'},
        {from: 'justin', msg: 'hello'},
        {from: 'jose', msg: 'hello'},
    ]

}

function reducer(state, action) {
    const {from, msg, topic} = action.payload;
    switch(action.type) {
        case 'RECEIVE_MESSAGE':
            return {
                ...state,
                [action.payload.topic]: [
                    ...state[topic],
                    {from, msg}
                ]
            }
        default:
            return state
    }
}

export default function Store(props) {

    const reducerHook = React.useReducer(reducer, initState)

    return (
        <CTX.Provider value={reducerHook}>
            {props.children}
        </CTX.Provider>
    )
} 