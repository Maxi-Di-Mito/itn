import React from 'react'
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux'
import store from  '../shared/store/store'
import Application from '../shared/containers/app.jsx'

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Provider store={store}>
            <Application />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('app')
);