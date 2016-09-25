import React from 'react'
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux'
import store from  '../shared/redux/store/store'
import routes from '../shared/Routes'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, browserHistory } from 'react-router'
import { blue500, blue700, tealA200, grey100, grey300, grey400, grey500, white, darkBlack, fullBlack } from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

injectTapEventPlugin();

let styles = {
    fontFamily: 'Roboto, sans-serif',
    primary1Color: blue500,
    primary2Color: blue700,
    primary3Color: grey400,
    accent1Color: tealA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: blue500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
    toolBar: {
        height: "56px",
        backgroundColor: blue500
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