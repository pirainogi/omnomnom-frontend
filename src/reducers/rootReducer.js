const defaultState = {
  test: "test"
}

function reducer(state=defaultState, action){
  console.log('%c REDUCER', 'color: blue', state, action)

  switch(action.type){
    default:
      return state
  }

}

export default reducer
