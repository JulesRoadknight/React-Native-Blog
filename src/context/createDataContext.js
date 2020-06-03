import React, { useReducer } from 'react';

// Reusable function used to automate setting up context & provider
// Alternative to manually creating context for every CRUD operation
export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};
    for(let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return(
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    )
  }

  return(
    { Context, Provider }
  )
}