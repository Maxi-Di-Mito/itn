import React, { Component ,PropTypes } from 'react';
import ContactSection from '../components/section/ContactSection.jsx';
import QuienesSomosSection from '../components/section/QuienesSomosSection.jsx';
import CatalogSection from '../components/section/CatalogSection.jsx';
import { Grid } from 'react-flexbox-grid';
import Header from '../components/common/Header';

class Application extends Component {

    render() {
        return (
            <div>
                <Header/>
                <section id="catalog">
                    <CatalogSection/>
                </section>
                <section id="us">
                    <QuienesSomosSection/>
                </section>
                <section id="contact">
                    <ContactSection/>
                </section>
                <section id="footer" style={{ height: "300px", backgroundColor: "yellow" }}/>
            </div>
        );
    }
}

export default Application;