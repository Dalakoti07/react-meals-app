import React, { Component } from 'react'
import { addRecipe } from '../actions'
import{connect} from 'react-redux';
import calendar from '../reducers/index';

class App extends Component {
  
	render() {
		return (
		<div>
			hello
		</div>
		)
  }
}

// connection component such that it can access the redux store
function mapStateToProps(calendar){
	const dayOrder=['sunday','monday','tuesday','wednesday','thrusday','friday','saturday'];

	return{
		calendar:dayOrder.map((day)=>({
			day,
			meals: Object.keys(calendar[day]).reduce((meals,meal)=>{
				meals[meal]=calendar[day][meal]? calendar[day][meal]:null
				return meals
			},{})
		}))
	}
}

// connecting component to redux so that component can call actions, or call dispatcher
export default connect()(App)