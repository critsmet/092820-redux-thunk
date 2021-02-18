import { SET_TITLES} from './actionTypes'

const url = "https://www.googleapis.com/books/v1/volumes?q=coding"

export function setTitles(){
  //action creators have in the past only been able to return objects
  //now with thunk, they can return functions, and those functions will be immediately invoked and be passed dispatch
  //this way we can use dispatch in our .then chain
  return function(dispatch) {
    fetch(url)
    .then(res => res.json())
    .then(respObj => {
      let titles = respObj.items.map(item => item.volumeInfo.title)
      dispatch({type: SET_TITLES, payload: titles})
    })
  }
}
