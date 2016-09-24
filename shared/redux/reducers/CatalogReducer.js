import CatalogActions from '../actions/CatalogActions';

const initialState = {
	data: [],
	isFetching: false,
	errors: {}
};

const catalogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CatalogActions.START_CATALOG_FETCH:
			return {
				...state,
				isFetching: action.isFetching
			};

		case CatalogActions.END_CATALOG_FETCH:
			return {
				...state,
				isFetching: action.isFetching,
				data: action.data
			};

		case CatalogActions.ERROR_CATALOG_FETCH:
			return {
				...state,
				isFetching: action.isFetching,
				errors: action.error
			};

		default:
			return state;
	}
};

export default catalogsReducer;