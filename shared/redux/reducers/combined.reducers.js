import { combineReducers } from 'redux';
import catalog from './CatalogReducer';

//import content from '../reducers/content.reducer';


//Here we will import and combine all the reducers we define
export default combineReducers({
	catalog
});