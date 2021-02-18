import React from 'react';

import { connect } from 'react-redux'
import { setTitles } from './redux/actionCreators'
import './App.css';

//two reasons we use class components: 1. if we need component lifecycle methods 2. local state

class App extends React.Component{

  componentDidMount(){
    //asynchronous logic for information in the redux store does not belong in any one component
    //this takes up too much space for logic/data that might not even be used by this component
    //it should be organized elsewhere
    this.props.setTitlesWithinDispatch()
  }

  makeLIsFromTitles(title, index){
    return <li key={title + "-" + index}>{title}</li>
  }

  render(){
    console.log(this.props)
    return(
      <div className="App">
        <h3>Books about coding!</h3>
        <ul id="titles-container">
          {this.props.titlesInOurStoresState.length === 0 ? <li>No titles yet</li> : this.props.titlesInOurStoresState.map(this.makeLIsFromTitles)}
        </ul>
      </div>
    )
  }

}

//both class components and functional components work with connect
//connect is a function that returns a function that accepts a component (class or functional) as an argument (highier order function)

//connect takes in two potential arguments
//1. a function conventionally called mapStateToProps (you can call it whatever you want though!)

function mapStateToProps(state){
  //this object that we return will have its key: value pairs inside of props for the component at the end
  return {
    titlesInOurStoresState: state.titles
  }
}

//2. mapDispatchToProps

function mapDispatchToProps(dispatch){
  return {
    //action creators only return objects, dispatch only accepts objects...for now....
    //with THUNK, dispatch can now receive EITHER objects (actions) OR functions
    //if it receives a function, it will know to invoke it and pass dispatch to it so that the function has access to dispatch inside
    setTitlesWithinDispatch: () => dispatch(setTitles())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
