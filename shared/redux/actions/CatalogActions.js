import fetch from 'isomorphic-fetch';

class CatalogActions {
	static START_CATALOG_FETCH = "START_CATALOG_FETCH";
	static END_CATALOG_FETCH = "END_CATALOG_FETCH";
	static ERROR_CATALOG_FETCH = "ERROR_CATALOG_FETCH";

	static fetch() {
		return dispatch => {
			this.onFetchStart(dispatch);

			return fetch('/catalog', { method: 'GET' })
				.then(response => response.json())
				.then(data => this.onFetchSuccess(dispatch, data))
				.catch(err => this.onFetchError(dispatch, error))
		}
	}

	static onFetchStart(dispatch) {
		dispatch(this.sendAction(CatalogActions.START_CATALOG_FETCH, null, true));
	}

	static onFetchSuccess(dispatch, data) {
		dispatch(this.sendAction(CatalogActions.END_CATALOG_FETCH, null, false, data));
	}

	static onFetchError(dispatch, error) {
		dispatch(this.sendAction(CatalogActions.ERROR_CATALOG_FETCH, error));
	}

	static sendAction(type, error, isFetching, data) {
		return {
			type,
			error,
			isFetching,
			data
		};
	}
}

export default CatalogActions;