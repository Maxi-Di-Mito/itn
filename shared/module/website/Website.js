import React, { Component ,PropTypes } from 'react';
import ContactSection from './section/contact/ContactSection.js';
import UsSection from './section/us/UsSection.js';
import CatalogSection from './section/catalog/CatalogSection.js';
import Header from './section/header/Header';
import Footer from './section/footer/Footer';

class Website extends Component {
    render() {
        return (
            <div>
                <Header/>
                <CatalogSection/>
                <UsSection/>
                <ContactSection/>
                <Footer/>
            </div>
        );
    }
}

export default Website;