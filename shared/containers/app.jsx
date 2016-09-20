import React, { Component ,PropTypes } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';


import FlatButton from 'material-ui/FlatButton';

import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

import ContactSection from '../components/section/ContactSection.jsx';
import QuienesSomosSection from '../components/section/QuienesSomosSection.jsx';
import CatalogSection from '../components/section/CatalogSection.jsx';
import {blue400, darkBlack} from 'material-ui/styles/colors';


const toolbarStyle = {
    background: blue400,
    margin:0
};
const buttonStyle = {
    height:"auto",
    margin:0
};

const titleStyle = {
    color: darkBlack,
    fontWeight: "bold",
    fontFamily: "Roboto"
};


class Application extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        injectTapEventPlugin();
        componentHandler.upgradeAllRegistered();

    }

    componentDidUpdate() {
        componentHandler.upgradeDom();
    }

    render() {
        return (
            <div>
                <Toolbar style={toolbarStyle}>
                    <ToolbarGroup float="left">
                        <ToolbarTitle text="ITN" style={titleStyle}/>
                    </ToolbarGroup>
                    <ToolbarGroup float="right">
                        <FlatButton label="Catalogo"  style={buttonStyle} backgroundColor={blue400}/>
                        <FlatButton label="Quienes Somos" style={buttonStyle} backgroundColor={blue400}/>
                        <FlatButton label="Contacto" style={buttonStyle} backgroundColor={blue400}/>
                    </ToolbarGroup>
                </Toolbar>


                <CatalogSection/>
                <QuienesSomosSection/>
                <ContactSection/>
           </div>
        )
    }
}


const TitleButtons = () => (
    <div>

    </div>
)




export default Application;