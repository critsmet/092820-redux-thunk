import { SET_TITLES } from './actionTypes'

export function appReducer(state = {titles: []}, action){
  switch(action.type){
    case SET_TITLES:
      return {titles: action.payload}
    default:
      return state;
  }
}
