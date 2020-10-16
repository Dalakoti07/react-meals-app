import React, { Component } from 'react'
import{connect} from 'react-redux';
import { addRecipe, removeFromCalendar } from '../actions'

class App extends Component {
	render() {
		console.log('props of app :',this.props)
		return (
		<div>
			hello
		</div>
		)
  }
}
// connection component such that it can access the redux store
// it tells how we can map a redux state to props of a specific component
function mapStateToProps (calendar) {
	const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  
	return {
	  calendar: dayOrder.map((day) => ({
		day,
		meals: Object.keys(calendar[day]).reduce((meals, meal) => {
		  meals[meal] = calendar[day][meal]
			? calendar[day][meal]
			: null
  
		  return meals
		}, {})
	  })),
	}
  }

// way of connecting redux-dispatch to react component, now selectRecipe and remove would go to app's props as we using curring on line 44
function mapDispatchToProps (dispatch) {
	return {
	  selectRecipe: (data) => dispatch(addRecipe(data)),
	  remove: (data) => dispatch(removeFromCalendar(data))
	}
}

// used connect() to curry and return a function that takes in App
// connecting component to redux so that component can call actions, or call dispatcher
export default connect(mapStateToProps,mapDispatchToProps)(App)

// connect connects component and store
// connect() connects a React component to the Redux store. mapStateToProps() allows us to specify which state from 
// the store you want passed to your React component. 
// mapDispatchToProps() allows us to bind dispatch to your action creators before they ever hit your component