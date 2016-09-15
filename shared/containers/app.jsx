import React, { Component ,PropTypes } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {Header,Navigation,Layout, Drawer,Content,Footer,FooterSection,FooterLinkList} from 'react-mdl';

import ContactSection from '../components/section/ContactSection.jsx';
import QuienesSomosSection from '../components/section/QuienesSomosSection.jsx';
import CatalogSection from '../components/section/CatalogSection.jsx';


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
            <Layout fixedHeader>
                <Header title="ITN" scroll>
                    <Navigation>
                        <a href="/">Quienes somos</a>
                        <a href="/">Catálogo</a>
                        <a href="/">Contacto</a>
                    </Navigation>
                </Header>
                <Content>
                    <CatalogSection/>
                    <QuienesSomosSection/>
                    <ContactSection/>
                </Content>
            </Layout>
        )
    }
}

export default Application;