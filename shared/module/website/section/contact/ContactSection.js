import React, { Component ,PropTypes } from 'react';
import ContactSectionView from './ContactSectionView.js'
import $ from 'jquery';
import { connect } from 'react-redux';

const sendMail = (form) => {
    return new Promise((resolve, reject)=>{
        $.ajax({
            url: '/sendMail',
            data: $(form).serialize(),
            dataType: 'json',
            type: 'post',
            success: (data)=> {
                console.log(JSON.stringify(data));
                resolve(data);
            },
            error:(jq)=>{
                reject(jq);
            }
        });
    })
};

const mapDispatchToProps = (dispatch) => ({
    handleSubmit: (form) => sendMail(form)
});

// @connect(null, mapDispatchToProps)
class ContactSection extends Component {
    render() {
        let { handleSubmit } = this.props;

        return (
            <ContactSectionView sendMail={sendMail}/>
        )
    }
}

export default ContactSection;