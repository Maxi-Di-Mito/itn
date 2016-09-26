import React, { Component, PropTypes } from 'react';


const withMuiTheme= (WrappedComponent) => {
    return class MUIThemeWrapper extends Component {

        static contextTypes = {
            muiTheme: PropTypes.object.isRequired
        };

        render() {
            return <WrappedComponent palette={this.context.muiTheme.palette}/>
        }
    }
};