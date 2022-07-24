# Counter App with redux

### Why Redux?
It is used for state management.
Removes the problem of prop drilling by using redux store

We have an alternate of redux i.e. react hooks

### What is Redux?
Redux is a library for manages and updates application state by using events called actions.
It serves as a centralized store for state that needs to be used across your entire application, 
with rules ensuring that the state can only be updated in a predictable fashion.

#### Actions
What to do?
- Pure javascript object 
- have a type field
- tell what to do but not how to do

Example:
`return {
    type: 'INCREMENT',
    payload: num
}`

`return {
    type: 'DECREMENT',
    payload: num
}`

##### Action Creator
- pure functions to create action
- Reusable
- portable
- easy to test

`export const incNumber = () => {
    return{
        type: 'INCREMENT',
        payload: num
    }
}

- call function incNumber to get increment action


#### Reducer
How to do it?
- Function
- takes current state and action as arguments
- returns a new state

` const initialState = 0;`
` const changeTheNumber = (state=initialState, action) => {
    switch(action.type){
        case 'INCREMENT': return state + action.payload;
        case 'DECREMENT': return state - 1;
        default: return state;
    }
}`

#### STORE
object which holds the state of the application
- Brings together the state, actions, and reducers to make the app
- single store in one application i.e. only one root reducer function
- state is read only
- you can update the state using dispatch
- changes are made with pure reducer functions

import { createStore } from "redux";
const store = createStore(rootReducers);

##### Functions associated with store are
1. createStore()
2. dispatch(action)
3. getState()



