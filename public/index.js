import React from 'react'
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux'
import store from  '../shared/redux/store/store'
import routes from '../shared/containers/Routes'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, browserHistory } from 'react-router'

injectTapEventPlugin();

let styles = {
    appBar: {
        height: "50px"
    }
};

const hashLinkScroll = () => {
    const { hash } = window.location;
    if (hash !== '') {
        // Push onto callback queue so it runs after the DOM is updated,
        // this is required when navigating from a different page so that
        // the element is rendered on the page before trying to getElementById.
        setTimeout(() => {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({block: "end", behavior: "smooth"});
        }, 0);
    }
};

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(styles)}>
        <Provider store={store}>
            <Router routes={routes} history={browserHistory} onUpdate={hashLinkScroll}/>
        </Provider>
    </MuiThemeProvider>,
    MOUNT_NODE
);